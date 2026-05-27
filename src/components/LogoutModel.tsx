import { colorsPalette } from "@/src/themes/colorsPalette";
import { typography } from "@/src/themes/typhography";
import { LogOut } from "lucide-react-native";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface LogoutModalProps {
    visible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export function LogoutModal({ visible, onConfirm, onCancel }: LogoutModalProps) {
    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
            onRequestClose={onCancel}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>

                    {/* Icon */}
                    <View style={styles.iconWrapper}>
                        <LogOut size={28} color={colorsPalette.primary} />
                    </View>

                    {/* Text */}
                    <Text style={styles.title}>Sair da conta</Text>
                    <Text style={styles.subtitle}>
                        Tem certeza que deseja sair?
                    </Text>

                    {/* Buttons */}
                    <View style={styles.buttonsRow}>
                        <Pressable
                            style={({ pressed }) => [styles.button, styles.cancelButton, pressed && { opacity: 0.7 }]}
                            onPress={onCancel}
                        >
                            <Text style={styles.cancelText}>Cancelar</Text>
                        </Pressable>

                        <Pressable
                            style={({ pressed }) => [styles.button, styles.confirmButton, pressed && { opacity: 0.7 }]}
                            onPress={onConfirm}
                        >
                            <Text style={styles.confirmText}>Sair</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "#00000099",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 32,
    },
    container: {
        width: "100%",
        backgroundColor: colorsPalette.card,
        borderRadius: 16,
        padding: 24,
        alignItems: "center",
        borderWidth: 1,
        borderColor: colorsPalette.border,
    },
    iconWrapper: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: colorsPalette.secondary,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
    title: {
        fontSize: typography.title,
        fontWeight: "bold",
        color: colorsPalette.textPrimary,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: typography.subtitles,
        color: colorsPalette.textSecondary,
        textAlign: "center",
        marginBottom: 24,
    },
    buttonsRow: {
        flexDirection: "row",
        gap: 12,
        width: "100%",
    },
    button: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
    },
    cancelButton: {
        backgroundColor: colorsPalette.background,
        borderWidth: 1,
        borderColor: colorsPalette.border,
    },
    confirmButton: {
        backgroundColor: colorsPalette.primary,
    },
    cancelText: {
        color: colorsPalette.textSecondary,
        fontWeight: "600",
        fontSize: typography.subtitles,
    },
    confirmText: {
        color: colorsPalette.textPrimary,
        fontWeight: "600",
        fontSize: typography.subtitles,
    },
});