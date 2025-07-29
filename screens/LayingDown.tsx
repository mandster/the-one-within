import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { GlobalStyles } from '../theme/GlobalStyles';

export default function LayingDown() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <View style={[GlobalStyles.container, { backgroundColor: theme.colors.background }]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 20 }}>
        <Text style={{ color: theme.colors.text }}>← Back</Text>
      </TouchableOpacity>
      <Text style={[GlobalStyles.title, { color: theme.colors.gold }]}>Laying Down</Text>
      <Text style={[GlobalStyles.text, { color: theme.colors.text, marginTop: 20 }]}>
        Coming soon: full-body scan meditation inspired by Vipassana.
      </Text>
    </View>
  );
}