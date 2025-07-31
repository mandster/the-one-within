import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';

export default function InquiryStage3() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('InquiryStage4' as never);
    }, 6000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={[
        styles.container,
        { justifyContent: 'center', alignItems: 'center' },
      ]}
    >
      <Text style={[styles.title, { textAlign: 'center' }]}>If This Ends, What Remains?</Text>
      <Text style={[styles.text, { marginTop: 20, textAlign: 'center' }]}>Life events fade away…</Text>
    </View>
  );
}
