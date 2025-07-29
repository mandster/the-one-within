import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../theme/GlobalStyles';
import { useTheme } from '../theme/ThemeContext';

export default function EmbodiedPracticeHome() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  const practices = [
    { title: 'Still Sitting', desc: 'Breath + spine awareness', screen: 'Still Sitting' },
    { title: 'Releasing Movement', desc: 'Shake & surrender (Osho-style)', screen: 'Releasing Movement' },
    { title: 'Laying Down', desc: 'Full-body scan (Vipassana-inspired)', screen: 'Laying Down' },
    { title: 'Heart Breathing', desc: 'Coherence + visual pulse', screen: 'Heart Breathing' },
    { title: 'Walking Meditation', desc: 'Tap-sync to stay in the Now', screen: 'Walking Meditation' },
  ];

  return (
    <View style={[GlobalStyles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[GlobalStyles.navBackButton, { backgroundColor: theme.colors.gold }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[GlobalStyles.buttonText, { color: theme.colors.background }]}>← Back</Text>
        </TouchableOpacity>
      </View>

      <Text style={[GlobalStyles.title, { color: theme.colors.gold }]}>Embodied Practices</Text>
      <Text style={[GlobalStyles.subtitle, { color: theme.colors.text, marginBottom: 20 }]}>
        Tap any practice to begin your inner exploration
      </Text>

      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {practices.map((practice, index) => (
          <TouchableOpacity
            key={index}
            style={[GlobalStyles.practiceCard, { borderColor: theme.colors.gold }]}
            onPress={() => navigation.navigate(practice.screen as never)}
          >
            <Text style={[GlobalStyles.practiceTitle, { color: theme.colors.gold }]}>
              {practice.title}
            </Text>
            <Text style={[GlobalStyles.text, { color: theme.colors.text, marginTop: 4 }]}>
              {practice.desc}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
