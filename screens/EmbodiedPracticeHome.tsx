// screens/EmbodiedPracticeHome.tsx

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { styles } from '../theme/GlobalStyles';
import { createGlobalStyles } from '../theme/GlobalStyles';

const practices = [
  {
    title: '🧘 Still Sitting',
    description: 'Breath + spine awareness',
    route: 'Still Sitting',
  },
  {
    title: '💃 Releasing Movement',
    description: 'Shake & surrender (Osho-style)',
    route: 'Releasing Movement',
  },
  {
    title: '🛌 Laying Down',
    description: 'Full-body scan (Vipassana-inspired)',
    route: 'Laying Down',
  },
  {
    title: '💓 Heart Breathing',
    description: 'Coherence meditation with visual pulse',
    route: 'Heart Breathing',
  },
  {
    title: '🚶 Walking Meditation',
    description: 'Tap-sync guidance to stay in the Now',
    route: 'Walking Meditation',
  },
];

export default function EmbodiedPracticeHome() {
  const { theme, fontSizes } = useTheme();
  const navigation = useNavigation();
  const styles = createGlobalStyles(theme);
  
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.gold, fontSize: fontSizes.xxl }]}>
        Embodied Practices
      </Text>
      <Text style={[styles.text, { color: theme.colors.text, marginBottom: 24 }]}>
        Choose a practice to enter presence through your body:
      </Text>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {practices.map((practice, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(practice.route as never)}
            activeOpacity={0.9}
            style={[
              styles.card,
              {
                backgroundColor: theme.colors.cardBackground,
                borderColor: theme.colors.gold,
                marginBottom: 16,
              },
            ]}
          >
            <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
              {practice.title}
            </Text>
            <Text style={[styles.cardSubtitle, { color: theme.colors.muted }]}>
              {practice.description}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
