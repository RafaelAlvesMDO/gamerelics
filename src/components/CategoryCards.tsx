import { BlurView } from "expo-blur";
import { CirclePlus } from "lucide-react-native";
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
import { colorsPalette } from "../themes/colorsPalette";
import { typography } from "../themes/typhography";

interface Game {
    id: string;
    coverImg?: string | ImageSourcePropType;
}

interface CategoryCardProps {
    title: string;
    games: Game[];
    headerColor?: string;
    borderBottomColor?: string;
    onPress?: () => void;
}

export function CategoryCard({ title, games, headerColor, borderBottomColor, onPress }: CategoryCardProps) {

    const previewGames = games.slice(0, 3);

    return (
        <View style={styles.card}>

            {/* Header */}
            <View style={[styles.header, {
                backgroundColor: headerColor ?? colorsPalette.secondary, borderColor: colorsPalette.border, // topo + lados
                borderBottomColor:
                    borderBottomColor ?? (headerColor ?? colorsPalette.secondary) + "99",
            }]}>
                <Text style={styles.title}>{title}</Text>
            </View>

            {/* Game previews */}
            <View style={styles.gamesRow}>

                {previewGames.map((game) => (
                    <Image
                        key={game.id}
                        source={game.coverImg ? { uri: game.coverImg as string } : require("../assets/game-capes/placeholder.jpg")}
                        style={styles.cover}
                    />
                ))}

                {/* Show more */}
                <Pressable onPress={onPress} style={styles.cover}>

                    <Image
                        source={games[3]?.coverImg ? { uri: games[3].coverImg as string } : require("../assets/game-capes/placeholder.jpg")}
                        style={styles.cover}
                    />

                    <BlurView style={styles.blurOverlay}>
                        <View style={styles.overlayDark} />
                        <Text style={styles.verMais}>Ver mais</Text>
                        <CirclePlus color={colorsPalette.textPrimary} size={24} />
                    </BlurView>

                </Pressable>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: colorsPalette.card,
        borderRadius: 14,
        overflow: "hidden",
        marginBottom: 20,
    },

    header: {
        backgroundColor: colorsPalette.secondary,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderColor: "#B3B3B3",
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        borderWidth: 0.5,
        borderBottomWidth: 2
    },

    title: {
        color: colorsPalette.textPrimary,
        fontSize: typography.normalText,
        fontWeight: "bold",
    },

    gamesRow: {
        flexDirection: "row",
        padding: 10,
        gap: 4,
    },

    cover: {
        width: 80,
        height: 110,
        borderRadius: 8,
        overflow: "hidden",
    },

    blurOverlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colorsPalette.blur,
    },

    overlayDark: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.78)",
    },

    verMais: {
        color: colorsPalette.textPrimary,
        fontWeight: "bold",
        fontSize: typography.subtitles,
        paddingBottom: 5
    },

});