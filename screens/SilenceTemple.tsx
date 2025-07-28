// SilenceTemple.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { GlobalStyles } from '../theme/GlobalStyles';

export default function SilenceTemple() {
  const { theme, darkMode, toggleDarkMode } = useTheme();
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    // Load actual time from storage or state here
  }, []);

  return (
    <View style={[GlobalStyles.container, { alignItems: 'center', paddingTop: 40 }]}> 
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: theme.colors.gold, marginBottom: 8 }}>
        Silence Temple
      </Text>
      <Text style={{ fontSize: 16, color: theme.colors.muted, marginBottom: 24 }}>
        Enter the Presence
      </Text>

      <TouchableOpacity
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          backgroundColor: theme.colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
          shadowColor: theme.colors.text,
          shadowOpacity: 0.3,
          shadowRadius: 10,
        }}
      >
        <Text style={{ color: theme.colors.text, fontWeight: '600' }}>The One</Text>
      </TouchableOpacity>

      <Text style={{ color: theme.colors.text, marginBottom: 12 }}>
        Total Time in Silence: {totalTime} min
      </Text>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: theme.colors.text, marginRight: 8 }}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>
    </View>
  );
}
