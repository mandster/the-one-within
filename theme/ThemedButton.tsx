import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

interface ThemedButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export default function ThemedButton({ label, onPress, style, textStyle, disabled }: ThemedButtonProps) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[{
        backgroundColor: theme.colors.gold,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
        opacity: disabled ? 0.5 : 1,
        alignItems: 'center',
        marginTop: 12,
      }, style]}
    >
      <Text style={[{
        color: theme.colors.background,
        fontWeight: '600',
        fontSize: theme.fontSizes.md,
      }, textStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
