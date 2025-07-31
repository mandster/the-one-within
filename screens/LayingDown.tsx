import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';

export default function LayingDown() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 20 }}>
        <Text style={{ color: theme.colors.text }}>← Back</Text>
      </TouchableOpacity>
      <Text style={[styles.title, { color: theme.colors.gold }]}>Laying Down</Text>
      <Text style={[styles.text, { color: theme.colors.text, marginTop: 20 }]}>
        Coming soon: full-body scan meditation inspired by Vipassana.
      </Text>
    </View>
  );
}