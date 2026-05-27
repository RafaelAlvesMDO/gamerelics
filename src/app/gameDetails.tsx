import { GameData, getGameById } from "@/src/services/gameService";
import { styles } from "@/src/styles/gameDetailStyleSheet";
import { colorsPalette } from "@/src/themes/colorsPalette";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ChevronLeft, Clock, Star } from "lucide-react-native";
import { useEffect, useState } from "react";
import { BackHandler, Image, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const STATUS_LABELS = {
    playing: "Jogando",
    played: "Jogado",
    backlog: "Quero Jogar",
} as const;

const STATUS_COLORS = {
    playing: colorsPalette.playing,
    played: colorsPalette.played,
    backlog: colorsPalette.backlog,
} as const;

export default function GameDetail() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const [game, setGame] = useState<GameData | null>(null);

    useEffect(() => {
        async function loadGame() {
            if (id) {
                const data = await getGameById(id);
                setGame(data);
            }
        }
        loadGame();
    }, [id]);

    useEffect(() => {
        if (!game) return;
        const backAction = () => {
            router.push({ pathname: "/gameSection", params: { status: game.status } });
            return true;
        };
        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => backHandler.remove();
    }, [game]);

    if (!game) {
        return (
            <View style={[styles.container, { paddingTop: insets.top }]}>
                <Text style={styles.notFound}>Jogo não encontrado.</Text>
            </View>
        );
    }

    const statusColor = STATUS_COLORS[game.status];

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>

            {/* Header */}
            <View style={[styles.header, { borderBottomColor: statusColor }]}>
                <Pressable
                    onPress={() => router.push({ pathname: "/gameSection", params: { status: game.status } })}
                    style={styles.backButton}
                >
                    <ChevronLeft color={colorsPalette.textPrimary} size={26} />
                </Pressable>
                <Text style={styles.headerTitle} numberOfLines={1}>{game.title}</Text>
                <View style={styles.backButton} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Image */}
                <View style={styles.coverContainer}>
                    <Image
                        source={game.coverImg ? { uri: game.coverImg } : require("@/src/assets/game-capes/placeholder.jpg")}
                        style={styles.cover}
                    />
                </View>

                {/* Title */}
                <Text style={styles.title}>{game.title}</Text>

                {/* Category Tag */}
                <View style={[styles.statusBadge, { backgroundColor: statusColor + "22", borderColor: statusColor }]}>
                    <Text style={[styles.statusText, { color: statusColor }]}>
                        {STATUS_LABELS[game.status]}
                    </Text>
                </View>

                {/* Divider */}
                <View style={[styles.divider, { backgroundColor: statusColor + "44" }]} />

                {/* Playtime */}
                {game.playTime && (
                    <View style={styles.infoRow}>
                        <Clock color={colorsPalette.textSecondary} size={18} />
                        <Text style={styles.infoLabel}>Tempo de Jogo</Text>
                        <Text style={styles.infoValue}>{game.playTime}</Text>
                    </View>
                )}

                {/* Rating */}
                {game.status === "played" && game.rating && (
                    <View style={styles.infoRow}>
                        <Star color={colorsPalette.textSecondary} size={18} />
                        <Text style={styles.infoLabel}>Avaliação</Text>
                        <View style={styles.starsRow}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={18}
                                    color={statusColor}
                                    fill={star <= game.rating! ? statusColor : "transparent"}
                                />
                            ))}
                        </View>
                    </View>
                )}

                {/* Comment */}
                {game.comment && (
                    <>
                        <Text style={styles.sectionLabel}>Comentário</Text>
                        <View style={styles.commentBox}>
                            <Text style={styles.commentText}>{game.comment}</Text>
                        </View>
                    </>
                )}

            </ScrollView>
        </View>
    );
}