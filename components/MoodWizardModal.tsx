// components/MoodWizardModal.tsx
import React, { useMemo, useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Platform,
  Dimensions,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles, spacing, fontSizes, borderRadius } from '../theme/GlobalStyles';

const { width } = Dimensions.get('window');

type MoodAnswer = 'calm' | 'anxious' | 'tired' | 'restless' | 'heavy' | 'scattered' | 'open' | 'sad';

const QUESTIONS = [
  {
    id: 'energy',
    title: 'How’s your energy right now?',
    options: [
      { label: 'Low', emoji: '🫧', value: 'tired' as MoodAnswer },
      { label: 'Balanced', emoji: '🌿', value: 'calm' as MoodAnswer },
      { label: 'High', emoji: '⚡️', value: 'restless' as MoodAnswer },
    ],
  },
  {
    id: 'mind',
    title: 'How’s your mind?',
    options: [
      { label: 'Scattered', emoji: '🌪️', value: 'scattered' as MoodAnswer },
      { label: 'Clear', emoji: '🌤️', value: 'calm' as MoodAnswer },
      { label: 'Heavy', emoji: '🪨', value: 'heavy' as MoodAnswer },
    ],
  },
  {
    id: 'heart',
    title: 'What best matches the heart?',
    options: [
      { label: 'Open', emoji: '💗', value: 'open' as MoodAnswer },
      { label: 'Tender', emoji: '🌸', value: 'sad' as MoodAnswer },
      { label: 'Tight', emoji: '🗜️', value: 'anxious' as MoodAnswer },
    ],
  },
];

const STORAGE_KEYS = {
  LAST_WIZARD_COMPLETED_AT: '@mood_wizard_completed_at',
  LAST_WIZARD_RESULT: '@mood_wizard_result',
};

function getRecommendationRoute(tally: Record<MoodAnswer, number>) {
  // pick mood with max votes
  const entries = Object.entries(tally) as [MoodAnswer, number][];
  const [topMood] = entries.sort((a, b) => b[1] - a[1])[0] ?? ['calm', 0];

  // Map to your existing routes
  switch (topMood) {
    case 'anxious':
    case 'sad':
      return 'Heart Breathing';         // soothe & regulate
    case 'tired':
    case 'heavy':
      return 'Laying Down';             // body scan + rest
    case 'restless':
    case 'scattered':
      return 'Walking Meditation';      // channel into rhythm
    case 'open':
      return 'SilenceTempleHome';       // go straight to silence
    default:
      return 'Still Sitting';           // calm/balanced baseline
  }
}

export default function MoodWizardModal() {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);
  const navigation = useNavigation();
  const route = useRoute();

  // steps & answers
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<MoodAnswer[]>([]);
  const progress = (step + 1) / QUESTIONS.length;

  // animations
  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(30)).current;
  const glow = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 400, useNativeDriver: true, easing: Easing.out(Easing.ease) }),
      Animated.timing(slide, { toValue: 0, duration: 400, useNativeDriver: true, easing: Easing.out(Easing.ease) }),
    ]).start();
  }, [step]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glow, { toValue: 1, duration: 1600, useNativeDriver: false }),
        Animated.timing(glow, { toValue: 0, duration: 1600, useNativeDriver: false }),
      ])
    ).start();
  }, []);

  const current = QUESTIONS[step];

  const onPick = (value: MoodAnswer) => {
    if (Platform.OS !== 'web') Haptics.selectionAsync();
    setAnswers(prev => {
      const next = [...prev];
      next[step] = value;
      return next;
    });
  };

  const canContinue = answers[step] != null;

  const onNext = async () => {
    if (!canContinue) return;
    if (step < QUESTIONS.length - 1) {
      setStep(s => s + 1);
      return;
    }

    // compute tally
    const tally = {} as Record<MoodAnswer, number>;
    answers.forEach(a => { tally[a] = (tally[a] ?? 0) + 1; });

    const routeName = getRecommendationRoute(tally);

    // persist result
    const payload = { answers, tally, route: routeName, at: new Date().toISOString() };
    await AsyncStorage.setItem(STORAGE_KEYS.LAST_WIZARD_RESULT, JSON.stringify(payload));
    await AsyncStorage.setItem(STORAGE_KEYS.LAST_WIZARD_COMPLETED_AT, payload.at);

    // close modal and route
    // @ts-ignore
    navigation.goBack();
    // slight delay so modal dismiss feels smooth
    setTimeout(() => {
      // @ts-ignore
      navigation.navigate(routeName);
    }, 220);
  };

  const onSkip = () => {
    // @ts-ignore
    navigation.goBack();
  };

  const shadowIntensity = glow.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 14],
  });

  // glass card for the wizard
  const Card: React.FC<{ children: React.ReactNode; style?: any }> = ({ children, style }) => (
    <View
      style={[
        styles.card,
        {
          width: '100%',
          maxWidth: 560,
          borderRadius: 24,
          backgroundColor: 'rgba(255,255,255,0.12)',
          borderColor: 'rgba(255,255,255,0.20)',
          ...(Platform.OS === 'web' ? { backdropFilter: 'blur(16px)' as any } : {}),
          shadowOpacity: 0.18,
          shadowRadius: 24,
        },
        style,
      ]}
    >
      {children}
    </View>
  );

  const OptionPill: React.FC<{
    label: string;
    emoji: string;
    selected?: boolean;
    onPress?: () => void;
  }> = ({ label, emoji, selected, onPress }) => {
    const scale = useRef(new Animated.Value(1)).current;
    const pressIn = () =>
      Animated.spring(scale, { toValue: 0.96, useNativeDriver: true, friction: 4, tension: 120 }).start();
    const pressOut = () =>
      Animated.spring(scale, { toValue: 1, useNativeDriver: true, friction: 3, tension: 120 }).start();

    return (
      <Animated.View style={{ transform: [{ scale }], marginBottom: 12, width: '100%' }}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPressIn={pressIn}
          onPressOut={pressOut}
          onPress={onPress}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 16,
            borderRadius: borderRadius.full,
            backgroundColor: selected ? 'rgba(255,255,255,0.26)' : 'rgba(255,255,255,0.12)',
            borderWidth: 1,
            borderColor: selected ? theme.colors.gold : 'rgba(255,255,255,0.2)',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: fontSizes.md, color: theme.colors.text }}>{label}</Text>
          <Text style={{ fontSize: 20 }}>{emoji}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const progressWidth = Math.max(0.08 * width, (width - 48) * progress);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      {/* Dimmed gradient backdrop */}
      <LinearGradient
        colors={[theme.colors.background, theme.colors.tabBackground ?? 'rgba(0,0,0,0.35)']}
        style={{ position: 'absolute', inset: 0 }}
      />

      {/* Top bar: Close */}
      <View style={{ paddingHorizontal: 20, paddingTop: 26, paddingBottom: 12, alignItems: 'flex-end' }}>
        <TouchableOpacity onPress={onSkip} style={{ paddingVertical: 8, paddingHorizontal: 12 }}>
          <Text style={{ color: theme.colors.textMuted, fontSize: 14 }}>Skip for now</Text>
        </TouchableOpacity>
      </View>

      {/* Progress bar (glass) */}
      <View style={{ paddingHorizontal: 24 }}>
        <View
          style={{
            height: 8,
            borderRadius: 999,
            backgroundColor: 'rgba(255,255,255,0.08)',
            borderColor: 'rgba(255,255,255,0.16)',
            borderWidth: 1,
            overflow: 'hidden',
          }}
        >
          <Animated.View
            style={{
              width: progressWidth,
              height: '100%',
              backgroundColor: theme.colors.gold,
              shadowColor: theme.colors.gold,
              shadowOpacity: 0.6,
              shadowRadius: 6,
            }}
          />
        </View>
      </View>

      {/* Card */}
      <Animated.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', opacity: fade, transform: [{ translateY: slide }] }}>
        <Card>
          {/* title */}
          <View style={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 6 }}>
            <Text style={[{ fontSize: 18, textAlign: 'center', color: theme.colors.text }]}>{current.title}</Text>
          </View>

          {/* glowing aura behind options */}
          <Animated.View
            pointerEvents="none"
            style={{
              position: 'absolute',
              top: 40,
              alignSelf: 'center',
              width: 180,
              height: 180,
              borderRadius: 90,
              backgroundColor: theme.colors.gold + '33',
              shadowColor: theme.colors.gold,
              shadowOpacity: 0.8,
              shadowRadius: shadowIntensity as any,
            }}
          />

          {/* options */}
          <View style={{ paddingHorizontal: 20, paddingTop: 6, paddingBottom: 16 }}>
            {current.options.map((opt) => {
              const selected = answers[step] === opt.value;
              return (
                <OptionPill
                  key={opt.value}
                  label={`${opt.label}`}
                  emoji={opt.emoji}
                  selected={selected}
                  onPress={() => onPick(opt.value)}
                />
              );
            })}
          </View>

          {/* actions */}
          <View
            style={{
              flexDirection: 'row',
              gap: 12,
              padding: 16,
              paddingTop: 10,
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity
              style={[{
                flex: 1,
                paddingVertical: 12,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: 'rgba(255,255,255,0.25)',
                alignItems: 'center',
                backgroundColor: 'rgba(255,255,255,0.10)',
              }]}
              onPress={onSkip}
            >
              <Text style={{ color: theme.colors.text }}>Close</Text>
            </TouchableOpacity>

            <TouchableOpacity
              disabled={!canContinue}
              onPress={onNext}
              style={[{
                flex: 1,
                paddingVertical: 12,
                borderRadius: 14,
                alignItems: 'center',
                backgroundColor: canContinue ? theme.colors.gold : 'rgba(255,255,255,0.18)',
              }]}
            >
              <Text style={{ color: canContinue ? '#2a2a2a' : theme.colors.textMuted }}>
                {step < QUESTIONS.length - 1 ? 'Continue' : 'Show Recommendation'}
              </Text>
            </TouchableOpacity>
          </View>
        </Card>
      </Animated.View>
    </View>
  );
}
