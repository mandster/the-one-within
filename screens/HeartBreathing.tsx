import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { GlobalStyles } from '../theme/GlobalStyles';

export default function HeartBreathing() {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[GlobalStyles.container, { backgroundColor: theme.colors.background }]}>
      <TouchableOpacity style={GlobalStyles.navBackButton} onPress={() => navigation.goBack()}>
        <Text style={[GlobalStyles.buttonText, { color: theme.colors.gold }]}>← Back</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={[GlobalStyles.title, { color: theme.colors.gold }]}>Heart Breathing</Text>

        <Text style={[GlobalStyles.text, { color: theme.colors.text, marginTop: 20 }]}>
          Focus attention in the heart center. Inhale slowly, imagining the breath entering the heart.
          Exhale gently, feeling warmth radiate from within.
          {'\n\n'}
          Synchronize with a soft internal pulse. Let your breath and heart cohere.
        </Text>

        <Text style={[GlobalStyles.text, { color: theme.colors.muted, marginTop: 20, fontStyle: 'italic' }]}>
          Practice Duration: 3–10 min. Use soft focus, stay relaxed.
        </Text>
      </ScrollView>
    </View>
  );
}
