// screens/Settings.tsx
import React from 'react';
import { Text, View } from 'react-native';
import { createGlobalStyles } from '../theme/GlobalStyles';
import { useTheme } from '../theme/ThemeContext';

export default function Settings() {
  const { theme, darkMode, toggleDarkMode } = useTheme();
  const styles = createGlobalStyles(theme);
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
    <Text style={{ color: theme.colors.text, marginRight: 10 }}>Coming soon!</Text>

  </View>
  
  );
}
