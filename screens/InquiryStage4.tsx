import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';
import { createGlobalStyles } from '../theme/GlobalStyles';

export default function InquiryStage4() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('InquiryStage5' as never);
    }, 7000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={[theme.colors.background, theme.colors.surface]}
      style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}
    >
      <Image
        source={require('../assets/eyes-mirror.png')}
        style={{ width: 180, height: 180, borderRadius: 90, marginBottom: 24 }}
      />
      <Text style={[styles.title, { textAlign: 'center', color: theme.colors.text }]}>
        Where Is the One Watching From?
      </Text>
      <Text style={[styles.text, {
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
