import { CategoryCard } from "@/src/components/CategoryCards";
import { styles } from "@/src/styles/homeStyleSheet";
import { colorsPalette } from "@/src/themes/colorsPalette";
import { useRouter } from "expo-router";
import { Gamepad2 } from "lucide-react-native";
import { useMemo } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { sampleGames } from "../../data/sampleGames";

const categories = [
    { id: "playing", label: "Jogando", color: colorsPalette.playing },
    { id: "played", label: "Jogados", color:colorsPalette.played },
    { id: "backlog", label: "Quero Jogar", color: colorsPalette.backlog },
];

export default function Index() {
    const router = useRouter();

    const counts = useMemo(() => ({
        playing: sampleGames.filter((g) => g.status === "playing").length,
        played: sampleGames.filter((g) => g.status === "played").length,
        backlog: sampleGames.filter((g) => g.status === "backlog").length,
    }), []);

    const previews = useMemo(() => ({
        playing: sampleGames.filter((g) => g.status === "playing").slice(0, 5),
        played: sampleGames.filter((g) => g.status === "played").slice(0, 5),
        backlog: sampleGames.filter((g) => g.status === "backlog").slice(0, 5),
    }), []);

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

                        <Text style={styles.subtitle}>
                            Sua coleção pessoal de jogos
                        </Text>

                        {/* STATS */}
                        <View style={styles.statsRow}>

                            <View style={[styles.statCard, {borderColor: colorsPalette.playing}]}>
                                <Text style={styles.statNumber}>{counts.playing}</Text>
                                <Text style={styles.statLabel}>Jogando</Text>
                            </View>

                            <View style={[styles.statCard, {borderColor: colorsPalette.played}]}>
                                <Text style={styles.statNumber}>{counts.played}</Text>
                                <Text style={styles.statLabel}>Jogados</Text>
                            </View>

                            <View style={[styles.statCard, {borderColor: colorsPalette.backlog}]}>
                                <Text style={styles.statNumber}>{counts.backlog}</Text>
                                <Text style={styles.statLabel}>Backlog</Text>
                            </View>

                        </View>
                    </View>
                </View>

                {/* CATEGORIES */}
                <View style={styles.main}>

                    {categories.map((cat) => {

                        const games = previews[cat.id as keyof typeof previews];

                        return (
                            <CategoryCard
                                key={cat.id}
                                title={cat.label}
                                games={games}
                                headerColor={colorsPalette.card}
                                borderBottomColor={cat.color}
                                onPress={() => router.push(`/(tabs)/gameSection?status=${cat.id}`)}
                            />
                        );

                    })}

                </View>

            </ScrollView>

        </View>
    );
}