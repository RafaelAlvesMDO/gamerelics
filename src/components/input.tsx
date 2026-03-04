import { colorsPalette } from "@/src/themes/colorsPalette";
import { Eye, EyeOff, LucideIcon } from "lucide-react-native";
import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
} from "react-native";

export interface InputProps extends TextInputProps {
    label: string;
    icon?: LucideIcon;
    error?: string;
}

export function Input({
    label,
    icon: Icon,
    secureTextEntry,
    style,
    error,
    ...rest
}: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = secureTextEntry === true;

    return (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>

            {/* Show Icon based in your choice */}
            <View style={[
                styles.inputWrapper,
                error && styles.inputError
            ]}>
                {Icon && (
                    <Icon
                        size={18}
                        color={colorsPalette.textSecondary}
                        style={styles.iconLeft}
                    />
                )}

                {/* Check if is a Password Input, based on prop: secureTextEntry */}
                <TextInput
                    {...rest}
                    secureTextEntry={isPassword && !showPassword}
                    placeholderTextColor={colorsPalette.textSecondary}
                    style={[
                        styles.input,
                        isPassword && { paddingRight: 40 },
                        style,
                    ]}
                />

                {/* Change Eye Icon based on showPassword State */}
                {isPassword && (
                    <Pressable
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.iconRight}
                    >
                        {showPassword ? (
                            <EyeOff size={18} color={colorsPalette.textSecondary} />
                        ) : (
                            <Eye size={18} color={colorsPalette.textSecondary} />
                        )}
                    </Pressable>
                )}
            </View>
            {/* Error Message */}
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    inputGroup: {
        marginBottom: 16,
    },

    label: {
        color: colorsPalette.textSecondary,
        marginBottom: 6,
    },

    inputWrapper: {
        backgroundColor: "#ffffff0d",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#2a2a2a",
        height: 48,
        justifyContent: "center",
    },

    input: {
        color: colorsPalette.textPrimary,
        paddingLeft: 36,
        paddingRight: 12,
    },

    iconLeft: {
        position: "absolute",
        left: 10,
    },

    iconRight: {
        position: "absolute",
        right: 10,
    },

    inputError: {
        borderColor: colorsPalette.error,
    },

    errorText: {
        color: colorsPalette.error,
        fontSize: 14,
        marginTop: 8,
    },
})