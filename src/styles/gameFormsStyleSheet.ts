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
        paddingVertical: 6,
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
        gap: 8,
        paddingBottom: 40,
    },
    imagePicker: {
        alignSelf: "center",
        marginBottom: 8,
    },
    imagePreview: {
        width: 140,
        height: 190,
        borderRadius: 12,
    },
    imagePlaceholder: {
        width: 140,
        height: 190,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: colorsPalette.border,
        borderStyle: "dashed",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        backgroundColor: colorsPalette.card,
    },
    imagePlaceholderText: {
        color: colorsPalette.textSecondary,
        fontSize: typography.normalText - 2,
    },
    label: {
        color: colorsPalette.textPrimary,
        fontSize: typography.normalText,
        fontWeight: "bold",
        marginTop: 8,
        marginBottom: 4,
    },
    input: {
        backgroundColor: colorsPalette.card,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colorsPalette.border,
        paddingHorizontal: 12,
        paddingVertical: 10,
        color: colorsPalette.textPrimary,
        fontSize: typography.normalText,
    },
    textArea: {
        minHeight: 100,
    },
    categoryRow: {
        flexDirection: "row",
        gap: 10,
    },
    categoryChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: colorsPalette.border,
    },
    categoryChipText: {
        color: colorsPalette.textSecondary,
        fontSize: typography.normalText - 2,
        fontWeight: "bold",
    },
    starsRow: {
        flexDirection: "row",
        gap: 8,
        marginVertical: 4,
    },
    saveButton: {
        marginTop: 16,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
    },
    saveButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: typography.normalText,
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalBox: {
        backgroundColor: colorsPalette.card,
        borderRadius: 16,
        padding: 24,
        alignItems: "center",
        width: "80%",
        gap: 8,
        borderWidth: 1,
        borderColor: colorsPalette.border,
    },
    modalEmojiSucess: {
        fontSize: 40,
        marginBottom: 4,
    },
    modalEmojiError: {
        fontSize: 40,
        marginBottom: 4,
        color: colorsPalette.error,
    },
    modalTitle: {
        color: colorsPalette.textPrimary,
        fontSize: typography.subtitles,
        fontWeight: "bold",
        textAlign: "center",
    },
    modalMessage: {
        color: colorsPalette.textSecondary,
        fontSize: typography.normalText,
        textAlign: "center",
    },
    modalButton: {
        marginTop: 8,
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 10,
    },
    modalButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: typography.normalText,
    },
});