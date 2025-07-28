import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  const { colors } = useTheme();

  return (
    <View style={{ marginBottom: 20, paddingHorizontal: 16 }}>
      <Text style={{
        fontSize: 24,
        fontWeight: '600',
        color: colors.gold,
        marginBottom: subtitle ? 4 : 0,
      }}>
        {title}
      </Text>
      {subtitle && (
        <Text style={{
          fontSize: 16,
          color: colors.text,
          opacity: 0.8,
        }}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}
