import { sampleGames } from "@/src/data/sampleGames";
import { styles } from "@/src/styles/profileStyleSheet";
import { colorsPalette } from "@/src/themes/colorsPalette";
import * as ImagePicker from "expo-image-picker";
import { Gamepad2 } from "lucide-react-native";
import { useMemo, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function Profile() {

    const counts = useMemo(() => ({
        total: sampleGames.length,
        playing: sampleGames.filter((g) => g.status === "playing").length,
        played: sampleGames.filter((g) => g.status === "played").length,
        backlog: sampleGames.filter((g) => g.status === "backlog").length,
    }), []);

    const [avatarUri, setAvatarUri] = useState<string | null>(null);

    async function pickAvatar() {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permission.granted) {
            alert("Precisamos de acesso à sua galeria para alterar a foto de perfil.");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],  // ← quadrado para foto de perfil
            quality: 0.8,
        });

        if (!result.canceled) {
            setAvatarUri(result.assets[0].uri);
        }
    }

    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Perfil</Text>
            </View>

            {/* Profile */}
            <View style={styles.profileContainer}>
                <Pressable onPress={pickAvatar}>
                    <View style={styles.avatar}>
                        <Image
                            source={avatarUri ? { uri: avatarUri } : require("../../assets/imgs/profilePicture.jpeg")}
                            style={styles.avatarImage}
                        />
                    </View>
                </Pressable>
                <Text style={styles.username}>Rafael</Text>
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

        </View>
    );
}