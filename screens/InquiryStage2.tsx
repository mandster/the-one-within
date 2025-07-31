import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';

const identities = ['Name', 'Past', 'Gender', 'Job', 'History', 'Personality'];
const { width } = Dimensions.get('window');

export default function InquiryStage2() {
  const [dissolved, setDissolved] = useState<string[]>([]);
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  const handleDissolve = (item: string) => {
    setDissolved((prev) => [...prev, item]);
    if (dissolved.length + 1 === identities.length) {
      setTimeout(() => navigation.navigate('InquiryStage3' as never), 500);
    }
  };

  return (
    <View style={[styles.container, { alignItems: 'center' }]}>  
      <Text style={styles.title}>What Am I Not?</Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 12,
        }}
      >
        {identities.map((item) => (
          <TouchableOpacity
            key={item}
            disabled={dissolved.includes(item)}
            onPress={() => handleDissolve(item)}
            style={{
              backgroundColor: dissolved.includes(item)
                ? theme.colors.background
                : theme.colors.gold,
              paddingVertical: 10,
              paddingHorizontal: 16,
              borderRadius: 999,
              margin: 6,
              borderWidth: 1,
              borderColor: theme.colors.gold,
              opacity: dissolved.includes(item) ? 0.3 : 1,
            }}
          >
            <Text style={{ color: theme.colors.text }}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
