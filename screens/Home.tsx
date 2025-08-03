import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { CardStyles } from '../theme/CardStyles';
import { createGlobalStyles } from '../theme/GlobalStyles';
import { GlassCard } from '../components/GlassCard';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { theme, fontSizes } = useTheme();
  const styles = createGlobalStyles(theme);

  const appSections = [
    {
      name: 'Inquiry',
      description: 'Who is the One Within?',
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
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Welcome Message */}
        <View style={styles.welcomeContainer}>
          <Text style={[styles.title, { color: theme.colors.gold, fontSize: fontSizes.xxl }]}>
            Welcome to the Inner Journey
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.text, fontSize: fontSizes.lg }]}>
            Your companion for spiritual growth and self-discovery.
          </Text>
        </View>

        {/* App Sections */}

        
        <View style={styles.cardsContainer}>
          {appSections.map((section, index) => (
            <GlassCard
              key={index}
              icon={section.icon}
              title={section.name}
              subtitle={section.description}
              onPress={() => navigation.navigate(section.route as never)}
            />
          ))}
        
          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={() => navigation.navigate('ProgressOverview' as never)}
          >
            <Text style={styles.buttonText}>📈 View Your Progress</Text>
          </TouchableOpacity>
        </View>
        

      </ScrollView>
    </View>
  );
}
