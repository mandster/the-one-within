import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';

export default function HeartBreathing() {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const styles = createGlobalStyles(theme);
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <TouchableOpacity style={styles.navBackButton} onPress={() => navigation.goBack()}>
        <Text style={[styles.buttonText, { color: theme.colors.gold }]}>← Back</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={[styles.title, { color: theme.colors.gold }]}>Heart Breathing</Text>

        <Text style={[styles.text, { color: theme.colors.text, marginTop: 20 }]}>
          Focus attention in the heart center. Inhale slowly, imagining the breath entering the heart.
          Exhale gently, feeling warmth radiate from within.
          {'\n\n'}
          Synchronize with a soft internal pulse. Let your breath and heart cohere.
        </Text>

        <Text style={[styles.text, { color: theme.colors.muted, marginTop: 20, fontStyle: 'italic' }]}>
          Practice Duration: 3–10 min. Use soft focus, stay relaxed.
        </Text>
      </ScrollView>
    </View>
  );
}
