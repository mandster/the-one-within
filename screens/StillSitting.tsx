import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { GlobalStyles } from '../theme/GlobalStyles';

export default function StillSitting() {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[GlobalStyles.container, { backgroundColor: theme.colors.background }]}>
      <TouchableOpacity style={GlobalStyles.navBackButton} onPress={() => navigation.goBack()}>
        <Text style={[GlobalStyles.buttonText, { color: theme.colors.gold }]}>← Back</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={[GlobalStyles.title, { color: theme.colors.gold }]}>Still Sitting</Text>

        <Text style={[GlobalStyles.text, { color: theme.colors.text, marginTop: 20 }]}>
          Sit upright. Feel your breath. Let attention rest at the base of your spine.
          {'\n\n'}
          Simply remain. No control. Just be.
        </Text>

        <Text style={[GlobalStyles.text, { color: theme.colors.muted, marginTop: 20, fontStyle: 'italic' }]}>
          Practice Duration: Recommended 5–15 min. Use silence timer if needed.
        </Text>
      </ScrollView>
    </View>
  );
}
