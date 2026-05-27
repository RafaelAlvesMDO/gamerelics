import { LogoutModal } from "@/src/components/LogoutModel";
import { auth, db } from "@/src/firebase-config";
import { logoutUser } from "@/src/services/authService";
import { getGamesByStatus } from "@/src/services/gameService";
import { styles } from "@/src/styles/profileStyleSheet";
import { colorsPalette } from "@/src/themes/colorsPalette";
import * as FileSystem from "expo-file-system/legacy";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Gamepad2, LogOut, Pencil } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Image, Modal, Pressable, Text, TextInput, View } from "react-native";

export default function Profile() {
    const router = useRouter();
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [newName, setNewName] = useState("");
    const [displayName, setDisplayName] = useState(auth.currentUser?.displayName ?? "Usuário");

    const [counts, setCounts] = useState({
        total: 0,
        playing: 0,
        played: 0,
        backlog: 0,
    });

    useEffect(() => {
        async function loadCounts() {
            const [playing, played, backlog] = await Promise.all([
                getGamesByStatus("playing"),
                getGamesByStatus("played"),
                getGamesByStatus("backlog"),
            ]);
            setCounts({
                total: playing.length + played.length + backlog.length,
                playing: playing.length,
                played: played.length,
                backlog: backlog.length,
            });
        }
        loadCounts();
    }, []);

    const [avatarUri, setAvatarUri] = useState<string | null>(null);

    useEffect(() => {
        async function loadAvatar() {
            const userId = auth.currentUser?.uid;
            if (!userId) return;
            const docRef = doc(db, "users", userId, "profile", "data");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setAvatarUri(docSnap.data().avatarUri ?? null);
            }
        }
        loadAvatar();
    }, []);

    async function pickAvatar() {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            alert("Precisamos de acesso à sua galeria para alterar a foto de perfil.");
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
        });
        if (!result.canceled) {
            const userId = auth.currentUser?.uid;
            if (!userId) return;
            const uri = result.assets[0].uri;
            const dir = FileSystem.documentDirectory + "profile/";
            const dirInfo = await FileSystem.getInfoAsync(dir);
            if (!dirInfo.exists) {
                await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
            }
            const dest = `${dir}avatar.jpg`;
            await FileSystem.copyAsync({ from: uri, to: dest });
            await setDoc(doc(db, "users", userId, "profile", "data"), { avatarUri: dest });
            setAvatarUri(dest);
        }
    }

    async function handleSaveName() {
        const user = auth.currentUser;
        if (!user || !newName.trim()) return;
        await updateProfile(user, { displayName: newName.trim() });
        setDisplayName(newName.trim());
        setNewName("");
        setShowEditModal(false);
    }

    async function handleLogout() {
        await logoutUser();
        router.replace("/(auth)/login");
    }

    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Perfil</Text>
                <Pressable onPress={() => setShowLogoutModal(true)} style={styles.logoutButton}>
                    <LogOut size={22} color={colorsPalette.textSecondary} />
                </Pressable>
            </View>

            {/* Profile */}
            <View style={styles.profileContainer}>
                <Pressable onPress={pickAvatar}>
                    <View style={styles.avatar}>
                        <Image
                            source={avatarUri
                                ? { uri: avatarUri }
                                : require("../../assets/imgs/defaultProfilePicture.jpg")}
                            style={styles.avatarImage}
                        />
                    </View>
                </Pressable>

                {/* Name and Pencil Icon */}
                <View style={styles.usernameRow}>
                    <Text style={styles.username}>{displayName}</Text>
                    <Pressable onPress={() => {
                        setNewName(displayName);
                        setShowEditModal(true);
                    }}>
                        <Pencil size={16} color={colorsPalette.primary} />
                    </Pressable>
                </View>
            </View>

            {/* Stats */}
            <View style={styles.statsGrid}>
                <View style={[styles.statCard, { borderColor: colorsPalette.secondary }]}>
                    <Gamepad2 size={20} color={colorsPalette.primary} />
                    <Text style={styles.statNumber}>{counts.total}</Text>
                    <Text style={styles.statLabel}>Total</Text>
                </View>
                <View style={[styles.statCard, { borderColor: colorsPalette.playing }]}>
                    <Text style={styles.statNumber}>{counts.playing}</Text>
                    <Text style={styles.statLabel}>Jogando</Text>
                </View>
                <View style={[styles.statCard, { borderColor: colorsPalette.played }]}>
                    <Text style={styles.statNumber}>{counts.played}</Text>
                    <Text style={styles.statLabel}>Jogados</Text>
                </View>
                <View style={[styles.statCard, { borderColor: colorsPalette.backlog }]}>
                    <Text style={styles.statNumber}>{counts.backlog}</Text>
                    <Text style={styles.statLabel}>Backlog</Text>
                </View>
            </View>

            {/* Modal - Edit Name */}
            <Modal transparent animationType="fade" visible={showEditModal}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalTitle}>Editar nome</Text>
                        <TextInput
                            style={styles.modalInput}
                            value={newName}
                            onChangeText={setNewName}
                            placeholder="Novo nome"
                            placeholderTextColor={colorsPalette.textSecondary}
                        />
                        <View style={styles.modalButtons}>
                            <Pressable
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={() => setShowEditModal(false)}
                            >
                                <Text style={styles.cancelText}>Cancelar</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.modalButton, styles.confirmButton]}
                                onPress={handleSaveName}
                            >
                                <Text style={styles.confirmText}>Salvar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Modal - Logout */}
            <LogoutModal
                visible={showLogoutModal}
                onConfirm={handleLogout}
                onCancel={() => setShowLogoutModal(false)}
            />

        </View>
    );
}