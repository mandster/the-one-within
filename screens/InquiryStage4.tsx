import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { GlobalStyles } from '../theme/GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';

export default function InquiryStage4() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('InquiryStage5' as never);
    }, 7000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={[theme.colors.background, theme.colors.surface]}
      style={[GlobalStyles.container, { justifyContent: 'center', alignItems: 'center' }]}
    >
      <Image
        source={require('../assets/eyes-mirror.png')}
        style={{ width: 180, height: 180, borderRadius: 90, marginBottom: 24 }}
      />
      <Text style={[GlobalStyles.title, { textAlign: 'center', color: theme.colors.text }]}>
        Where Is the One Watching From?
      </Text>
      <Text style={[GlobalStyles.text, {
        fontStyle: 'italic',
        marginTop: 20,
        textAlign: 'center',
        color: theme.colors.muted,
      }]}>
        “Who sees this seeing?”
      </Text>
    </LinearGradient>
  );
}
