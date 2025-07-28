
// StillSitting.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { GlobalStyles } from '../theme/GlobalStyles';

export default function StillSitting() {
  const { colors } = useTheme();

  return (
    <View style={[GlobalStyles.container, { padding: 20, backgroundColor:theme.colors.background }]}> 
      <Text style={[GlobalStyles.title, { color: colors.gold }]}>Still Sitting</Text>
      <Text style={[GlobalStyles.text, { color: colors.text, marginTop: 20 }]}> 
        Sit upright. Feel your breath. Let attention rest at the base of your spine.
        {'\n'}
        Simply remain. No control. Just be.
      </Text>
    </View>
  );
}
