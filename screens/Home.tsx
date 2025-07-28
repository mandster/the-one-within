// screens/HomeScreen.tsx

import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { GlobalStyles } from '../theme/GlobalStyles'; // Assuming GlobalStyles exists and is imported

export default function HomeScreen() {
  const navigation = useNavigation();
  const { theme, fontSizes } = useTheme();

  // Define the main sections/features of your app for navigation
  const appSections = [
    {
      name: 'Inquiry',
      description: 'Who is the One Within?.',
      route: 'InquiryStagesMenu', // Updated route to InquiryStagesMenu screen
      icon: '🔍', // Changed from 🌀 to 🔍 for more intuitive visual
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
  ];

  return (
    <View style={[GlobalStyles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Welcome Section */}
        <View style={styles.welcomeContainer}>
          <Text style={[GlobalStyles.title, { color: theme.colors.gold, fontSize: fontSizes.xxl }]}>
            Welcome to the Inner Journey
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.text, fontSize: fontSizes.lg }]}>
            Your companion for spiritual growth and self-discovery.
          </Text>
        </View>

        {/* Navigation Cards Section */}
        <View style={styles.cardsContainer}>
          {appSections.map((section, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.card,
                {
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.gold,
                  shadowColor: theme.colors.text,
                },
              ]}
              onPress={() => navigation.navigate(section.route as never)}
            >
              <Text style={styles.cardIcon}>{section.icon}</Text>
              <Text style={[styles.cardTitle, { color: theme.colors.text, fontSize: fontSizes.xl }]}>
                {section.name}
              </Text>
              <Text style={[styles.cardDescription, { color: theme.colors.muted, fontSize: fontSizes.md }]}>
                {section.description}
              </Text>
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
  card: {
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardIcon: {
    fontSize: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  cardDescription: {
    textAlign: 'center',
  },
});
