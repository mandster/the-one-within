import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { GlobalStyles } from '../theme/GlobalStyles';

export default function PracticesMenu() {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const practices = [
    { title: 'Still Sitting', route: 'StillSitting' },
    { title: 'Releasing Movement', route: 'ReleasingMovement' },
    { title: 'Laying Down', route: 'LayingDown' },
    { title: 'Heart Breathing', route: 'HeartBreathing' },
    { title: 'Walking Meditation', route: 'WalkingMeditation' },
  ];

  return (
    <View style={[GlobalStyles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[GlobalStyles.title, { color: theme.colors.gold, marginBottom: 20 }]}>Practice Menu</Text>
      {practices.map(({ title, route }) => (
        <TouchableOpacity key={route} style={styles.button} onPress={() => navigation.navigate(route)}>
          <Text style={{ color: theme.colors.text }}>{title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    alignItems: 'center',
  },
});