import { Game } from "@/src/data/sampleGames";
import { styles } from "@/src/styles/gameFormsStyleSheet";
import { colorsPalette } from "@/src/themes/colorsPalette";
import * as ImagePicker from "expo-image-picker";
import { useFocusEffect, useRouter } from "expo-router";
import { ChevronLeft, ImagePlus, Star } from "lucide-react-native";
import { useCallback, useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Modal,
    Platform,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CATEGORIES = [
    { id: "playing", label: "Jogando", color: colorsPalette.playing },
    { id: "played", label: "Jogado", color: colorsPalette.played },
    { id: "backlog", label: "Quero Jogar", color: colorsPalette.backlog },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

export default function NewGame() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    const [coverUri, setCoverUri] = useState<string | null>(null);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState<CategoryId | null>(null);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [playTime, setPlayTime] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFail, setShowFail] = useState(false);

    useFocusEffect(
        useCallback(() => {
            return () => {
                setCoverUri(null);
                setTitle("");
                setCategory(null);
                setComment("");
                setRating(0);
                setPlayTime("");
            };
        }, [])
    );

    const selectedColor =
        CATEGORIES.find((c) => c.id === category)?.color ?? colorsPalette.primary;

    async function pickImage() {
        const status = await ImagePicker.getMediaLibraryPermissionsAsync();

        if (!status.granted) {
            const resposta = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (!resposta.granted) {
                alert("Permissão não foi concedida.");
                return;
            }
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [3, 4],
            quality: 0.8,
        });

        if (!result.canceled) {
            setCoverUri(result.assets[0].uri);
        }
    }

    function handleSave() {
        if (!title || !category) {
            setShowFail(true);
            return;
        }

        const newGame: Game = {
            id: String(Date.now()),
            title,
            status: category,
            coverImg: coverUri ? { uri: coverUri } : require("@/src/assets/game-capes/placeholder.jpg"),
            comment: comment || undefined,
            playTime: playTime || undefined,
            rating: category === "played" && rating > 0 ? rating : undefined,
        };

        // CHANGE WHEN I HAVE THE FIREBASE
        console.log("Jogo cadastrado:", newGame);

        setShowSuccess(true);
    }

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            {/* Modal - Sucess Message */}
            <Modal transparent animationType="fade" visible={showSuccess}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalEmojiSucess}>✅</Text>
                        <Text style={styles.modalTitle}>Jogo Adicionado!</Text>
                        <Text style={styles.modalMessage}>"{title}" foi cadastrado com sucesso.</Text>
                        <Pressable
                            style={[styles.modalButton, { backgroundColor: colorsPalette.success }]}
                            onPress={() => {
                                setShowSuccess(false);
                                router.push("/");
                            }}
                        >
                            <Text style={styles.modalButtonText}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            {/* Modal - Error Message */}
            <Modal transparent animationType="fade" visible={showFail}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalEmojiError}>❌</Text>
                        <Text style={styles.modalTitle}>Preencha pelo menos o título e a categoria.</Text>
                        <Text style={styles.modalMessage}>Não foi possível cadastrar tente novamente.</Text>
                        <Pressable
                            style={[styles.modalButton, { backgroundColor: colorsPalette.error }]}
                            onPress={() => {
                                setShowFail(false);
                            }}
                        >
                            <Text style={styles.modalButtonText}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            {/* Header */}
            <View style={[styles.header, { borderBottomColor: selectedColor }]}>
                <Pressable onPress={() => router.back()} style={styles.backButton}>
                    <ChevronLeft color={colorsPalette.textPrimary} size={26} />
                </Pressable>
                <Text style={styles.headerTitle}>Novo Jogo</Text>
                <View style={styles.backButton} />
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "position"}
                >
                    {/* Image */}
                    <Pressable onPress={pickImage} style={styles.imagePicker}>
                        {coverUri ? (
                            <Image source={{ uri: coverUri }} style={styles.imagePreview} />
                        ) : (
                            <View style={styles.imagePlaceholder}>
                                <ImagePlus color={colorsPalette.textSecondary} size={36} />
                                <Text style={styles.imagePlaceholderText}>Adicionar Capa</Text>
                            </View>
                        )}
                    </Pressable>

                    {/* Title */}
                    <Text style={styles.label}>Título</Text>
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Nome do jogo"
                        placeholderTextColor={colorsPalette.textSecondary}
                    />

                    {/* Category Tag */}
                    <Text style={styles.label}>Categoria</Text>
                    <View style={styles.categoryRow}>
                        {CATEGORIES.map((cat) => (
                            <Pressable
                                key={cat.id}
                                onPress={() => setCategory(cat.id)}
                                style={[
                                    styles.categoryChip,
                                    category === cat.id && {
                                        backgroundColor: cat.color + "22",
                                        borderColor: cat.color,
                                    },
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.categoryChipText,
                                        category === cat.id && { color: cat.color },
                                    ]}
                                >
                                    {cat.label}
                                </Text>
                            </Pressable>
                        ))}
                    </View>

                    {/* Rating - Only for Played Games */}
                    {category === "played" && (
                        <>
                            <Text style={styles.label}>Avaliação</Text>
                            <View style={styles.starsRow}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Pressable key={star} onPress={() => setRating(star)}>
                                        <Star
                                            size={32}
                                            color={colorsPalette.played}
                                            fill={star <= rating ? colorsPalette.played : "transparent"}
                                        />
                                    </Pressable>
                                ))}
                            </View>
                        </>
                    )}

                    {/* Playtime */}
                    <Text style={styles.label}>Tempo de Jogo</Text>
                    <TextInput
                        style={styles.input}
                        value={playTime}
                        onChangeText={setPlayTime}
                        placeholder="Ex: 40h"
                        placeholderTextColor={colorsPalette.textSecondary}
                        keyboardType="default"
                    />

                    {/* Comantaries */}
                    <Text style={styles.label}>Comentário</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={comment}
                        onChangeText={setComment}
                        placeholder="Suas impressões sobre o jogo..."
                        placeholderTextColor={colorsPalette.textSecondary}
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                    />

                    {/* Save Button */}
                    <Pressable
                        style={[styles.saveButton, { backgroundColor: selectedColor }]}
                        onPress={handleSave}
                    >
                        <Text style={styles.saveButtonText}>Salvar Jogo</Text>
                    </Pressable>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
}