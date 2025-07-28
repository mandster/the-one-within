// EmbodiedPracticeHome.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { GlobalStyles } from '../theme/GlobalStyles';

const practices = [
  { name: 'Still Sitting', route: 'StillSitting' },
  { name: 'Heart Breathing', route: 'HeartBreathing' },
];

export default function EmbodiedPracticeHome() {
  const navigation = useNavigation();
  const { theme, fontSizes } = useTheme();

  return (
    <View style={[GlobalStyles.container, { alignItems: 'center', padding: 20 }]}>  
      <Text style={[GlobalStyles.title, { color: theme.colors.gold }]}>Embodied Practices</Text>

      {practices.map((item) => (
        <TouchableOpacity
          key={item.route}
          onPress={() => navigation.navigate(item.route as never)}
          style={[GlobalStyles.card, {
            borderColor: theme.colors.gold,
            borderWidth: 1,
            marginTop: 16,
            width: '100%',
            alignItems: 'center',
            paddingVertical: 14,
          }]}
        >
          <Text style={{ color: theme.colors.text, fontSize: fontSizes.md }}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}