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
        fontSize: typography.subtitles,
        fontWeight: "bold",
        flex: 1,
        textAlign: "center",
    },
    scrollContent: {
        padding: 16,
        paddingBottom: 40,
        alignItems: "center",
    },
    coverContainer: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 10,
        marginBottom: 20,
    },
    cover: {
        width: 180,
        height: 240,
        borderRadius: 14,
    },
    title: {
        color: colorsPalette.textPrimary,
        fontSize: typography.title,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    statusBadge: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1.5,
        marginBottom: 16,
    },
    statusText: {
        fontWeight: "bold",
        fontSize: typography.normalText - 2,
    },
    divider: {
        width: "100%",
        height: 1,
        marginBottom: 16,
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        gap: 8,
        marginBottom: 12,
    },
    infoLabel: {
        color: colorsPalette.textSecondary,
        fontSize: typography.normalText,
    },
    infoValue: {
        color: colorsPalette.textPrimary,
        fontSize: typography.normalText,
        fontWeight: "bold",
    },
    starsRow: {
        flexDirection: "row",
        gap: 3,
    },
    sectionLabel: {
        alignSelf: "flex-start",
        color: colorsPalette.textSecondary,
        fontSize: typography.normalText,
        marginBottom: 8,
        marginTop: 4,
    },
    commentBox: {
        width: "100%",
        backgroundColor: colorsPalette.card,
        borderRadius: 12,
        padding: 14,
        borderWidth: 1,
        borderColor: colorsPalette.border,
    },
    commentText: {
        color: colorsPalette.textPrimary,
        fontSize: typography.normalText,
        lineHeight: 22,
    },
    notFound: {
        color: colorsPalette.textSecondary,
        textAlign: "center",
        marginTop: 40,
    },
});