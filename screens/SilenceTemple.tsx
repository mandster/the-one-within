// screens/SilenceTemple.tsx

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Switch,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';
import ProgressRing from '../components/ProgressRing'; // ✅ Ensure this is a default export

const CIRCLE_LENGTH = 2 * Math.PI * 100;

export default function SilenceTemple() {
  const { theme, darkMode, toggleDarkMode, fontSizes } = useTheme();

  const styles = createGlobalStyles(theme);

  const [isSitting, setIsSitting] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);

  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    (async () => {
      const stored = await AsyncStorage.getItem('totalSilenceTime');
      if (stored) setTotalSeconds(parseInt(stored));
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('totalSilenceTime', totalSeconds.toString());
  }, [totalSeconds]);

  useEffect(() => {
    if (isSitting) {
      intervalRef.current = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
        setTotalSeconds((prev) => prev + 1);
      }, 1000);

      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.1,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
        ])
      ).start();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [isSitting]);

  const playSoundAndHaptic = async () => {
    try {
      if (Platform.OS !== 'web') await Haptics.selectionAsync();
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sound/soft-tap.mp3')
      );
      await sound.playAsync();
    } catch (e) {
      console.log('Feedback error:', e);
    }
  };

  const toggleSilence = () => {
    playSoundAndHaptic();
    setIsSitting((prev) => !prev);
    if (!isSitting) setElapsedSeconds(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.centeredContent}>
        <Text style={[styles.title, { color: theme.colors.gold, fontSize: fontSizes.xxl }]}>
          Silence Temple
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.text }]}>
          Enter the Presence
        </Text>

        <View style={styles.circleContainer}>
          <Animated.View
            style={[
              styles.outerGlow,
              { transform: [{ scale: pulseAnim }] },
            ]}
          />
          <TouchableOpacity
            onPress={toggleSilence}
            activeOpacity={0.8}
            style={styles.silenceCard}
          >
            <LinearGradient
              colors={['#f3e7e9', '#e3eeff']}
              start={{ x: 0.1, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientCircle}
            >
              <ProgressRing
                progress={(elapsedSeconds % 60) / 60}
                radius={100}
                strokeWidth={4}
                color={theme.colors.gold}
              />
              <View style={styles.innerCircle}>
                <Text style={styles.buttonText}>
                  {isSitting ? 'Pause' : 'Start'}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {!isSitting && (
            <Text style={styles.guidingText}>
              Tap the circle to begin your silence
            </Text>
          )}
        </View>

        <Text style={[styles.statText, { color: theme.colors.text }]}>
          Current Session: {formatTime(elapsedSeconds)}
        </Text>
        <Text style={[styles.statText, { color: theme.colors.text }]}>
          Total Time in Silence: {formatTime(totalSeconds)}
        </Text>

        <View style={styles.toggleRow}>
          <Text style={{ color: theme.colors.text }}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: '#ccc', true: theme.colors.gold }}
            thumbColor={darkMode ? theme.colors.text : '#f4f3f4'}
          />
        </View>
      </View>
    </View>
  );
}
