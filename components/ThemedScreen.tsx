import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext'; // ✅ import theme

export default function ThemedScreen() {
  const { theme } = useTheme(); // ✅ define it

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
    </View>
  );
}
