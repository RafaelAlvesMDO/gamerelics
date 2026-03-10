import { StyleSheet } from 'react-native';
import { colorsPalette } from '../themes/colorsPalette';
import { typography } from '../themes/typhography';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colorsPalette.background,
        paddingHorizontal: 20,
    },

    header: {
        paddingTop: 60,
        paddingBottom: 20,
    },

    headerTitle: {
        fontSize: typography.title,
        fontWeight: "bold",
        color: colorsPalette.textPrimary,
    },

    profileContainer: {
        alignItems: "center",
        marginBottom: 30,
    },

    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colorsPalette.background,
        borderWidth: 2,
        borderColor: colorsPalette.primary,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
        overflow: "hidden",
    },

    avatarImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    username: {
        fontSize: typography.title,
        fontWeight: "600",
        color: colorsPalette.textPrimary,
    },

    subtitle: {
        fontSize: 13,
        color: colorsPalette.textSecondary,
    },

    statsGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 10,
    },

    statCard: {
        width: "48%",
        backgroundColor: colorsPalette.background,
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: "center",
    },

    statNumber: {
        fontSize: typography.title,
        fontWeight: "bold",
        color: colorsPalette.textPrimary,
        marginTop: 4,
    },

    statLabel: {
        fontSize: typography.subtitles,
        color: colorsPalette.textSecondary,
    },

});