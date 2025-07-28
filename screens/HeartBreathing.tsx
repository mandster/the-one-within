import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { GlobalStyles } from '../theme/GlobalStyles';

export default function HeartBreathing() {
  const { colors } = useTheme(); // <--- CHANGE THIS LINE: Destructure 'colors' directly

  return (
    <View style={[GlobalStyles.container, { padding: 20, backgroundColor:theme.colors.background }]}> {/* Added background color for theme compatibility */}
      <Text style={[GlobalStyles.title, { color: colors.gold }]}>Heart Breathing</Text> {/* Added color for theme compatibility */}
      <Text style={[GlobalStyles.text, { color: colors.text, marginTop: 20 }]}> {/* Fixed: Access colors.text directly */}
        Bring attention to the center of your chest.

        Breathe slowly — in and out — as if through your heart.

        Let each breath fill you with warmth.
      </Text>
    </View>
  );
}