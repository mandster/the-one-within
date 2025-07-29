// screens/HomeScreen.tsx

import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { GlobalStyles } from '../theme/GlobalStyles';
import { CardStyles } from '../theme/CardStyles';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { theme, fontSizes } = useTheme();

  const appSections = [
    {
      name: 'Inquiry',
      description: 'Who is the One Within?.',
      route: 'InquiryStagesMenu',
      icon: '🔍',
    },
    {
      name: 'Journal Your Insights',
      description: 'Record your realizations and reflections.',
      route: 'JournalTab',
      icon: '📝',
    },
    {
      name: 'Embodied Practices',
      description: 'Engage in practices for inner balance.',
      route: 'EmbodiedTab',
      icon: '🧘‍♀️',
    },
    {
      name: 'Silence Temple',
      description: 'Find peace and quiet contemplation.',
      route: 'SilenceTab',
      icon: '🌑',
    },
    {
      name: 'Saints Library',
      description: 'Explore wisdom from enlightened beings.',
      route: 'SaintsTab',
      icon: '📖',
    },
    {
      name: 'Settings',
      description: 'Theme preferences & more.',
      route: 'SettingsTab',
      icon: '⚙️',
    },
    
  ];

  return (
    <View style={[GlobalStyles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.welcomeContainer}>
          <Text style={[GlobalStyles.title, { color: theme.colors.gold, fontSize: fontSizes.xxl }]}>Welcome to the Inner Journey</Text>
          <Text style={[styles.subtitle, { color: theme.colors.text, fontSize: fontSizes.lg }]}>Your companion for spiritual growth and self-discovery.</Text>
        </View>

        <View style={styles.cardsContainer}>
          {appSections.map((section, index) => (
            <TouchableOpacity
              key={index}
              style={[CardStyles.card, { backgroundColor: 'rgba(255,255,255,0.6)', borderColor: theme.colors.gold, shadowColor: theme.colors.text }]}
              onPress={() => navigation.navigate(section.route as never)}
            >
              <Text style={styles.cardIcon}>{section.icon}</Text>
              <Text style={[CardStyles.cardTitle, { color: theme.colors.text, fontSize: fontSizes.xl }]}>{section.name}</Text>
              <Text style={[CardStyles.cardDescription, { color: theme.colors.muted, fontSize: fontSizes.md }]}>{section.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  welcomeContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 24,
  },
  cardsContainer: {
    width: '100%',
    gap: 15,
  },
  cardIcon: {
    fontSize: 50,
    marginBottom: 10,
  },
});
