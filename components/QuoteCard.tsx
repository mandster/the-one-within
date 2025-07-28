import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons';

interface QuoteCardProps {
  quote: string;
  author: string;
  favorited?: boolean;
  onToggleFavorite?: () => void;
}

export default function QuoteCard({ quote, author, favorited, onToggleFavorite }: QuoteCardProps) {
  const { colors } = useTheme();

  return (
    <View
      style={{
        backgroundColor: colors.card,
        borderRadius: 16,
        padding: 20,
        marginHorizontal: 16,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      <Text style={{ color: colors.text, fontSize: 16, fontStyle: 'italic', marginBottom: 10 }}>
        “{quote}”
      </Text>
      <Text style={{ color: colors.muted, fontSize: 14, marginBottom: 12 }}>— {author}</Text>
      {onToggleFavorite && (
        <TouchableOpacity onPress={onToggleFavorite}>
          <MaterialIcons
            name={favorited ? 'star' : 'star-border'}
            size={24}
            color={favorited ? colors.gold : colors.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
