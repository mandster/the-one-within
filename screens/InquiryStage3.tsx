import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { GlobalStyles } from '../theme/GlobalStyles';

export default function InquiryStage3() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('InquiryStage4' as never);
    }, 6000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={[
        GlobalStyles.container,
        { justifyContent: 'center', alignItems: 'center' },
      ]}
    >
      <Text style={[GlobalStyles.title, { textAlign: 'center' }]}>If This Ends, What Remains?</Text>
      <Text style={[GlobalStyles.text, { marginTop: 20, textAlign: 'center' }]}>Life events fade away…</Text>
    </View>
  );
}
