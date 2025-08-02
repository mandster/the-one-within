// components/AnimatedBubble.tsx
import React, { useRef, useState } from 'react';
import { View, Text, Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';

interface Props {
  label: string;
  color: string;
}

export default function AnimatedBubble({ label, color }: Props) {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;

  const [burst, setBurst] = useState(false);

  const handlePress = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    const sound = new Audio.Sound();
    try {
      await sound.loadAsync(require('../assets/pop.mp3'));
      await sound.playAsync();
    } catch (e) {
      console.warn('Sound error:', e);
    }

    Animated.sequence([
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 2,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(glowAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setBurst(true);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.bubbleWrapper}>
        {!burst ? (
          <Animated.View
            style={[
              styles.bubble,
              {
                backgroundColor: color,
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
              },
            ]}
          >
            <Text style={styles.bubbleText}>{label}</Text>
          </Animated.View>
        ) : (
          <Animated.View
            style={[
              styles.glowCircle,
              {
                opacity: glowAnim,
              },
            ]}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
