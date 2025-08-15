import React , {  useState } from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';
import { useSoundPlayer } from '../hooks/useSoundPlayer';

export default function LayingDown() {
  const { theme, fontSizes } = useTheme();
  const styles = createGlobalStyles(theme);
  const [isSoundOn, setIsSoundOn] = useState(true);

  // 🔊 Play 963Hz when screen is focused
  useSoundPlayer(require('../assets/963hz.mp3'), isSoundOn);

  const cards = [
    {
      icon: 'globe',
      title: 'Feel the Earth',
      description: 'Allow gravity to hold you fully. Let your body sink in.',
    },
    {
      icon: 'wind',
      title: 'Breathe Deep',
      description: 'Inhale gently... exhale completely. Let go with each breath.',
    },
    {
      icon: 'feather',
      title: 'Relax Muscles',
      description: 'Relax your jaw, shoulders, chest, belly, legs… slowly.',
    },
    {
      icon: 'pause-circle',
      title: 'Melt into Stillness',
      description: 'Let silence envelop you. Stay… rest… be.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.colors.gold }]}>Laying Down</Text>
      <Text style={styles.textMuted}>Relax deeply and let go…</Text>

      <View style={{ marginTop: 16 }}>
        {cards.map((card, index) => (
          <View
            key={index}
            style={[
              styles.card,
              {
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderColor: theme.colors.gold,
              },
            ]}
          >
            <Feather name={card.icon as any} size={32} color={theme.colors.text} />
            <View style={{ flex: 1 }}>
              <Text style={[styles.practiceTitle, { marginBottom: 4 }]}>
                {card.title}
              </Text>
              <Text style={styles.textMuted}>{card.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
