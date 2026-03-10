import { sampleGames } from "@/src/data/sampleGames";
import { styles } from "@/src/styles/profileStyleSheet";
import { colorsPalette } from "@/src/themes/colorsPalette";
import { Gamepad2 } from "lucide-react-native";
import { useMemo } from "react";
import { Image, Text, View } from "react-native";

export default function Profile() {

    const counts = useMemo(() => ({
        total: sampleGames.length,
        playing: sampleGames.filter((g) => g.status === "playing").length,
        played: sampleGames.filter((g) => g.status === "played").length,
        backlog: sampleGames.filter((g) => g.status === "backlog").length,
    }), []);

    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Perfil</Text>
            </View>

            {/* Profile */}
            <View style={styles.profileContainer}>

                <View style={styles.avatar}>
                    <Image
                        source={require("../../assets/imgs/profilePicture.jpeg")}
                        style={styles.avatarImage}
                    />
                </View>

                <Text style={styles.username}>Rafael</Text>

            </View>

            {/* Stats */}
            <View style={styles.statsGrid}>

                <View style={[styles.statCard, {borderColor: colorsPalette.secondary}]}>
                    <Gamepad2 size={20} color={colorsPalette.primary} />
                    <Text style={styles.statNumber}>{counts.total}</Text>
                    <Text style={styles.statLabel}>Total</Text>
                </View>

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
    );
}