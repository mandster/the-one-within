// screens/HeartBreathing.tsx
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
  Switch,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';
import { useSoundPlayer } from '../hooks/useSoundPlayer'; // 🔁 Reusable hook

export default function HeartBreathing() {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);
  const navigation = useNavigation();
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [timeLeft, setTimeLeft] = useState(180); // ⏱ 3 minutes

  // 🌀 Animated pulse
  const pulseAnim = useRef(new Animated.Value(1)).current;

  // 🔁 Sound player hook
  useSoundPlayer(require('../assets/528hz.mp3'), isSoundOn);

  // ⏱ Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      navigation.navigate('NextScreen' as never); // Replace with actual screen
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // 💓 Pulse animation
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.3,
          duration: 2000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <TouchableOpacity style={styles.navBackButton} onPress={() => navigation.goBack()}>
        <Text style={[styles.buttonText, { color: theme.colors.gold }]}>← Back</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <Text style={[styles.title, { color: theme.colors.gold }]}>Heart Breathing</Text>

        {/* 🌀 Animated Visual */}
        <View style={{ alignItems: 'center', marginVertical: 30 }}>
          <Animated.View
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: theme.colors.surface,
              opacity: 0.6,
              transform: [{ scale: pulseAnim }],
            }}
          />
        </View>

        {/* 📖 Description */}
        <Text style={[styles.text, { color: theme.colors.text, marginTop: 12 }]}>
          Focus attention in the heart center. Inhale slowly, imagining the breath entering the heart.
          Exhale gently, feeling warmth radiate from within.
          {'\n\n'}
          Synchronize with a soft internal pulse. Let your breath and heart cohere.
        </Text>

        <Text style={[styles.text, { color: theme.colors.textMuted, marginTop: 20, fontStyle: 'italic' }]}>
          Practice Duration: 3–10 min. Use soft focus, stay relaxed.
        </Text>

        {/* ⏱ Remaining Time */}
        <Text
          style={[
            styles.subHeading,
            { color: theme.colors.text, fontSize: 16, textAlign: 'center', marginTop: 10 },
          ]}
        >
          Time Remaining: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </Text>

        {/* 🎧 Toggle Audio */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
            justifyContent: 'center',
          }}
        >
          <Text style={[styles.text, { marginRight: 10 }]}>Play 528Hz</Text>
          <Switch
            value={isSoundOn}
            onValueChange={() => setIsSoundOn((prev) => !prev)}
            trackColor={{ false: '#777', true: theme.colors.gold }}
            thumbColor={isSoundOn ? theme.colors.primary : '#ccc'}
          />
        </View>
      </ScrollView>
    </View>
  );
}
