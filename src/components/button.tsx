import { colorsPalette } from '@/src/themes/colorsPalette';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { typography } from '../themes/typhography';

export interface ButtonProps {
  title: string;
  backgroundColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
}

export function Button({
  title,
  backgroundColor = colorsPalette.primary,
  style,
  textStyle,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.buttonContainer,
          { backgroundColor },
          style,
        ]}
      >
        <Text style={[styles.buttonText, textStyle]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 48,
        backgroundColor: colorsPalette.primary,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 6,
    },
    
    buttonText: {
        color: colorsPalette.textPrimary,
        fontWeight: "600",
        fontSize: typography.normalText,
    },
})