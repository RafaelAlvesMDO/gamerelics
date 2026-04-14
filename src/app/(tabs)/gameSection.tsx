import { sampleGames } from "@/src/data/sampleGames";
import { styles } from "@/src/styles/gameSectionStyleSheet";
import { colorsPalette } from "@/src/themes/colorsPalette";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ChevronLeft, ChevronRight, Star } from "lucide-react-native";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CATEGORIES = {
    playing: "Jogando",
    played: "Jogados",
    backlog: "Quero Jogar",
} as const;

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

export default function GameSection() {
    const { status } = useLocalSearchParams<{ status: string }>();
    const router = useRouter();
    const insets = useSafeAreaInsets();

    const categoryKey = status as keyof typeof CATEGORIES;
    const games = sampleGames.filter((g) => g.status === status);

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>

            {/* Header */}
            <View style={[styles.header, { borderBottomColor: STATUS_COLORS[categoryKey] }]}>
                <Pressable onPress={() => router.back()} style={styles.backButton}>
                    <ChevronLeft color={colorsPalette.textPrimary} size={26} />
                </Pressable>
                <Text style={styles.headerTitle}>
                    {CATEGORIES[categoryKey] ?? status}
                </Text>
                <View style={styles.backButton} />
            </View>

            {/* Game Count */}
            <View style={styles.statsRow}>
                <View style={[styles.statCard, { borderColor: STATUS_COLORS[categoryKey] }]}>
                    <Text style={styles.statNumber}>{games.length}</Text>
                    <Text style={styles.statLabel}>
                        {CATEGORIES[categoryKey] ?? status}
                    </Text>
                </View>
            </View>

            {/* Listing */}
            <FlatList
                data={games}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable
                        style={({ pressed }) => [styles.card, pressed && { opacity: 0.7 }]}
                        onPress={() => router.push(`/(tabs)/gameDetails?id=${item.id}`)}
                    >
                        <Image source={item.coverImg} style={styles.cover} />
                        <View style={styles.info}>
                            <Text style={styles.gameTitle}>{item.title}</Text>

                            {/* Category Tag */}
                            <View style={[styles.statusBadge, { backgroundColor: STATUS_COLORS[item.status] + "33" }]}>
                                <Text style={[styles.statusText, { color: STATUS_COLORS[item.status] }]}>
                                    {STATUS_LABELS[item.status]}
                                </Text>
                            </View>

                            {/* Playtime */}
                            {item.playTime && (
                                <Text style={styles.playTime}>⏱ {item.playTime}</Text>
                            )}

                            {/* Rating - Only for Played Games */}
                            {item.status === "played" && item.rating && (
                                <View style={styles.starsRow}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={14}
                                            color={colorsPalette.played}
                                            fill={star <= item.rating! ? colorsPalette.played : "transparent"}
                                        />
                                    ))}
                                </View>
                            )}
                        </View>

                        {/* Button to open Game Detail */}
                        <ChevronRight color={colorsPalette.textSecondary} size={20} style={styles.chevron} />
                    </Pressable>
                )}
            />

            {/* New Game Button */}
            <Pressable
                style={[styles.newGameButton, { borderColor: STATUS_COLORS[categoryKey] }]}
                onPress={() => router.push(`/gameForms?status=${status}`)}
            >
                <Text style={[styles.newGameButtonText, { color: STATUS_COLORS[categoryKey] }]}>
                    + Novo Jogo
                </Text>
            </Pressable>

        </View>
    );
}