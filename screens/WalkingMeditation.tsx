// screens/WalkingMeditation.tsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';
import { useSoundPlayer } from '../hooks/useSoundPlayer';

const { width } = Dimensions.get('window');
const steps = ['Breathe In', 'Step', 'Breathe Out', 'Step'];

export default function WalkingMeditation() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  const [isSoundOn, setIsSoundOn] = useState(true);
  const [stepPhase, setStepPhase] = useState(0);
  const leftFootAnim = useRef(new Animated.Value(0)).current;
  const rightFootAnim = useRef(new Animated.Value(0)).current;

  // 🔊 Reusable Sound
  useSoundPlayer(require('../assets/528hz.mp3'), isSoundOn);

  // ⏱ Cue cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setStepPhase((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 👣 Animated footsteps loop
  useEffect(() => {
    const createStepAnimation = (animValue: Animated.Value, direction: 'up' | 'down') =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(animValue, {
            toValue: direction === 'up' ? -10 : 10,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: 0,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();

    createStepAnimation(leftFootAnim, 'up');
    createStepAnimation(rightFootAnim, 'down');
  }, []);

  return (
    <LinearGradient
      colors={[theme.colors.gold, theme.colors.onSurface]}
      style={[styles.container, { justifyContent: 'flex-start', paddingTop: 60 }]}
    >
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingHorizontal: 20 }}>
        <Text style={[styles.buttonText, { color: theme.colors.gold }]}>← Back</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 20, color: theme.colors.gold }]}>
        Walking Meditation
      </Text>

      {/* 🧭 Breath/Step Cue */}
      <Text
        style={[
          styles.title,
          {
            marginTop: 40,
            fontSize: 24,
            textAlign: 'center',
            fontWeight: '600',
            color: theme.colors.text,
          },
        ]}
      >
        {steps[stepPhase]}
      </Text>

      {/* 👣 Animated Footsteps */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
        <Animated.View style={{ transform: [{ translateY: leftFootAnim }], marginRight: 30 }}>
          <FootprintSVG color={theme.colors.primary} />
        </Animated.View>
        <Animated.View style={{ transform: [{ translateY: rightFootAnim }] }}>
          <FootprintSVG color={theme.colors.primary} flip />
        </Animated.View>
      </View>

      {/* 🎧 Toggle Ambient Sound */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 60 }}>
        <Text style={[styles.text, { marginRight: 10 }]}>Ambient Sound</Text>
        <Switch
          value={isSoundOn}
          onValueChange={() => setIsSoundOn((prev) => !prev)}
          trackColor={{ false: '#777', true: theme.colors.gold }}
          thumbColor={isSoundOn ? theme.colors.primary : '#ccc'}
        />
      </View>

      {/* 🧘 Practice Tip */}
      <Text
        style={[
          styles.text,
          {
            marginTop: 30,
            textAlign: 'center',
            color: theme.colors.textMuted,
            fontStyle: 'italic',
          },
        ]}
      >
        Sync steps with breath. Relax. Stay present.
      </Text>
    </LinearGradient>
  );
}

function FootprintSVG({ color = '#000', flip = false }: { color?: string; flip?: boolean }) {
  return (
    <Svg width={60} height={60} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10 20c0 1.1.9 2 2 2s2-.9 2-2v-5l2 1v-2l-2-2v-3c0-1.66-1.34-3-3-3S8 7.34 8 9v3l-2 2v2l2-1v5z"
        fill={color}
        transform={flip ? 'scale(-1,1) translate(-24,0)' : ''}
        opacity={0.8}
      />
    </Svg>
  );
}
