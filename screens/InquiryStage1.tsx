import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { GlobalStyles } from '../theme/GlobalStyles';


const identityOptions = [
  'Soul',
  'Energy',
  'Love',
  'Identity',
  'Human',
];

export default function InquiryStage1() {
  const [selected, setSelected] = useState<string | null>(null);
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { colors, fontSizes } = useTheme();

  const handleSelect = (option: string) => {
    setSelected(option);
    setTimeout(() => navigation.navigate('InquiryStage2' as never), 500);
  };

  return (
    <View style={[GlobalStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>  
      <Text style={GlobalStyles.title}>Who Am I?</Text>
      {identityOptions.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => handleSelect(option)}
          style={[
            GlobalStyles.card,
            {
              backgroundColor:
                selected === option ? theme.colors.gold : theme.colors.card,
              borderWidth: 1,
              borderColor: theme.colors.gold,
              marginBottom: 12,
              width: '100%',
              alignItems: 'center',
              paddingVertical: 14,
            },
          ]}
        >
        <Text style={{ fontSize: fontSizes.md }}>
        
        </Text>

          <Text
            style={{
              color: selected === option ? theme.colors.background : theme.colors.text,
              fontSize: theme.fontSizes.md,
              fontWeight: '600',
            }}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
