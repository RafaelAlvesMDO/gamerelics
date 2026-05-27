import { CategoryCard } from "@/src/components/CategoryCards";
import { GameData, getGamesByStatus } from "@/src/services/gameService";
import { styles } from "@/src/styles/homeStyleSheet";
import { colorsPalette } from "@/src/themes/colorsPalette";
import { useFocusEffect, useRouter } from "expo-router";
import { Gamepad2 } from "lucide-react-native";
import { useCallback, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const categories = [
    { id: "playing", label: "Jogando", color: colorsPalette.playing },
    { id: "played", label: "Jogados", color: colorsPalette.played },
    { id: "backlog", label: "Quero Jogar", color: colorsPalette.backlog },
];

export default function Index() {
    const router = useRouter();
    const [games, setGames] = useState<{ playing: GameData[], played: GameData[], backlog: GameData[] }>({
        playing: [],
        played: [],
        backlog: [],
    });

    useFocusEffect(
        useCallback(() => {
            async function loadGames() {
                const [playing, played, backlog] = await Promise.all([
                    getGamesByStatus("playing"),
                    getGamesByStatus("played"),
                    getGamesByStatus("backlog"),
                ]);
                setGames({ playing, played, backlog });
            }
            loadGames();
        }, [])
    );

    const counts = {
        playing: games.playing.length,
        played: games.played.length,
        backlog: games.backlog.length,
    };

    return (
        <View style={styles.container}>
            <ScrollView>

                {/* HERO HEADER */}
                <View style={styles.header}>
                    <Image source={require("../../assets/imgs/LoginBgImage-1.jpg")} style={styles.heroImage} />
                    <View style={styles.headerContent}>
                        <View style={styles.logoRow}>
                            <Gamepad2 color={colorsPalette.logo} size={28} />
                            <Text style={styles.title}>GameRelics</Text>
                        </View>
                        <Text style={styles.subtitle}>Sua coleção pessoal de jogos</Text>

                        {/* STATS */}
                        <View style={styles.statsRow}>
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
                </View>

                {/* CATEGORIES */}
                <View style={styles.main}>
                    {categories.map((cat) => (
                        <CategoryCard
                            key={cat.id}
                            title={cat.label}
                            games={games[cat.id as keyof typeof games]}
                            headerColor={colorsPalette.card}
                            borderBottomColor={cat.color}
                            onPress={() => router.push(`/gameSection?status=${cat.id}`)}
                        />
                    ))}
                </View>

            </ScrollView>
        </View>
    );
}