import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

export const GlassCard = ({
  icon,
  title,
  subtitle,
  onPress,
  style,
}: {
  icon: string;
  title: string;
  subtitle: string;
  onPress: () => void;
  style?: ViewStyle;
}) => {
  const { theme, fontSizes } = useTheme();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'rgba(255,255,255,0.15)',
        padding: 20,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.4)',
        marginVertical: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 20,
        backdropFilter: 'blur(20px)', // web only
        elevation: 6,
        ...style,
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 26 }}>{icon}</Text>
      <Text style={{ fontSize: fontSizes.xl, fontWeight: '600', color: theme.colors.text, marginTop: 10 }}>
        {title}
      </Text>
      <Text style={{ fontSize: fontSizes.md, color: theme.colors.textMuted, marginTop: 4, textAlign: 'center' }}>
        {subtitle}
      </Text>
    </TouchableOpacity>
  );
};
