// screens/ProgressOverview.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';

export default function ProgressOverview() {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingVertical: 40 }]}>
      <Text style={styles.title}>Your Progress</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Inquiry Journey</Text>
        <Text style={styles.text}>Stages Completed: 3 / 5</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Silence Temple</Text>
        <Text style={styles.text}>Total Silence Time: 57 mins</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Reflections</Text>
        <Text style={styles.text}>Saved Reflections: 14</Text>
      </View>
    </ScrollView>
  );
}
