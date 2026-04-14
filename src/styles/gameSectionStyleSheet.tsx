import { colorsPalette } from "@/src/themes/colorsPalette";
import { typography } from "@/src/themes/typhography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorsPalette.background,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderColor: colorsPalette.border,
    },
    backButton: {
        width: 36,
        alignItems: "center",
    },
    headerTitle: {
        color: colorsPalette.textPrimary,
        fontSize: typography.title,
        fontWeight: "bold",
        flex: 1,
        textAlign: "center",
    },
    count: {
        color: colorsPalette.textPrimary + "88",
        fontSize: typography.normalText,
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 32,
        gap: 12,
    },
    card: {
        flexDirection: "row",
        backgroundColor: colorsPalette.card,
        borderRadius: 12,
        overflow: "hidden",
    },
    cover: {
        width: 80,
        height: 110,
    },
    info: {
        flex: 1,
        padding: 12,
        justifyContent: "space-between",
    },
    gameTitle: {
        color: colorsPalette.textPrimary,
        fontSize: typography.normalText,
        fontWeight: "bold",
    },
    statusBadge: {
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginTop: 4,
        borderRadius: 20,
    },
    statusText: {
        fontSize: typography.normalText,
        fontWeight: "bold",
    },
    statsRow: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    statCard: {
        alignSelf: "center",
        borderWidth: 1.5,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: "center",
        minWidth: 90,
    },
    statNumber: {
        color: colorsPalette.textPrimary,
        fontSize: typography.normalText,
        fontWeight: "bold",
    },
    statLabel: {
        color: colorsPalette.textSecondary,
        fontSize: typography.normalText - 2,
        marginTop: 2,
    },
    newGameButton: {
        margin: 8,
        paddingVertical: 12,
        borderRadius: 12,
        borderWidth: 1.5,
        alignItems: "center",
    },
    newGameButtonText: {
        fontWeight: "bold",
        fontSize: typography.normalText,
    },
    playTime: {
        color: colorsPalette.textSecondary,
        fontSize: typography.normalText,
        marginTop: 4,
    },
    starsRow: {
        flexDirection: "row",
        gap: 3,
        marginTop: 4,
    },
    chevron: {
        alignSelf: "center",
        marginRight: 8,
    },
});