// screens/Settings.tsx
import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';

export default function Settings() {
  const { theme, darkMode, toggleDarkMode } = useTheme();
  const styles = createGlobalStyles(theme);
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
    <Text style={{ color: theme.colors.text, marginRight: 10 }}>Dark Mode</Text>
    <Switch
      value={darkMode}
      onValueChange={toggleDarkMode}
      trackColor={{ false: '#ccc', true: theme.colors.gold }}
      thumbColor={darkMode ? theme.colors.text : '#fff'}
    />
  </View>
  
  );
}
