// screens/InquiryStagesMenu.tsx
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';

const stages = [
  { icon: '🌀', title: 'Who Am I?', screen: 'InquiryStage1' },
  { icon: '💭', title: 'What Am I Not?', screen: 'InquiryStage2' },
  { icon: '⏳', title: 'If This Ends, What Remains?', screen: 'InquiryStage3' },
  { icon: '👁️', title: 'Where Is the One Watching From?', screen: 'InquiryStage4' },
  { icon: '🌐', title: 'Am I Separate?', screen: 'InquiryStage5' },
];

export default function InquiryStagesMenu() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      contentContainerStyle={{ padding: 20 }}
    >
      <Text style={[styles.title, { color: theme.colors.text, marginBottom: 16 }]}>Inquiry Stages</Text>

      {stages.map((stage) => (
        <TouchableOpacity
          key={stage.screen}
          onPress={() => navigation.navigate(stage.screen as never)}
          style={[styles.card, {
            borderColor: theme.colors.gold,
            backgroundColor: theme.colors.card,
            padding: 16,
            marginBottom: 12,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }]}
        >
          <Text style={{ fontSize: 24, marginRight: 12 }}>{stage.icon}</Text>
          <Text style={{ color: theme.colors.text, fontSize: theme.fontSizes?.md || 16, fontWeight: '600' }}>{stage.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
