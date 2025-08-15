import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Platform, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

let LottieView: any;
try {
  // Optional flourish; will be undefined on first run if not installed
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  LottieView = require('lottie-react-native');
} catch (_) {}

type Props = { visible: boolean; title?: string; subtitle?: string };

export default function SplashScreen({ visible, title = 'The One Within', subtitle = 'arriving…' }: Props) {
  const { theme } = useTheme();

  // fades the whole screen in/out
  const fade = useRef(new Animated.Value(0)).current;

  // pulsing gold aura
  const pulse = useRef(new Animated.Value(1)).current;

  // slow ring rotation
  const spin = useRef(new Animated.Value(0)).current;

  // title shimmer (left→right)
  const shimmer = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: visible ? 1 : 0,
      duration: visible ? 350 : 450,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();
  }, [visible]);

  useEffect(() => {
    const pulseLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.08, duration: 1300, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 1300, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
      ]),
    );
    const spinLoop = Animated.loop(
      Animated.timing(spin, { toValue: 1, duration: 6000, easing: Easing.linear, useNativeDriver: true }),
    );
    const shimmerLoop = Animated.loop(
      Animated.timing(shimmer, { toValue: 1, duration: 1800, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
    );
    pulseLoop.start(); spinLoop.start(); shimmerLoop.start();
    return () => { pulseLoop.stop(); spinLoop.stop(); shimmerLoop.stop(); };
  }, []);

  const spinDeg = spin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });
  const shimmerTranslate = shimmer.interpolate({ inputRange: [0, 1], outputRange: [-120, 120] });

  if (!visible) return null;

  return (
    <Animated.View
      pointerEvents="auto"
      style={[StyleSheet.absoluteFill, { opacity: fade, zIndex: 9999 }]}
    >
      {/* Background */}
      <LinearGradient
        colors={[theme.colors.background, theme.colors.tabBackground ?? 'rgba(0,0,0,0.45)']}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Centerpiece */}
      <View style={styles.center}>
        {/* Gold aura behind the ring */}
        <Animated.View
          style={[
            styles.aura,
            {
              backgroundColor: 'rgba(255, 179, 71, 0.18)',
              transform: [{ scale: pulse }],
              shadowColor: theme.colors.gold,
            },
          ]}
        />

        {/* Rotating ring */}
        <Animated.View style={[styles.ring, { borderColor: theme.colors.gold, transform: [{ rotate: spinDeg }] }]} />

        {/* Title + shimmer */}
        <View style={styles.titleWrap}>
          <Text style={[styles.title, { color: theme.colors.gold }]}>{title}</Text>
          <View style={styles.shimmerLine}>
            <Animated.View
              style={[
                styles.shimmer,
                {
                  backgroundColor: Platform.OS === 'web' ? 'rgba(255,255,255,0.35)' : '#ffffff66',
                  transform: [{ translateX: shimmerTranslate }],
                },
              ]}
            />
          </View>
          <Text style={[styles.subtitle, { color: theme.colors.muted }]}>{subtitle}</Text>
        </View>

        {/* Optional particles (Lottie) */}
        {LottieView ? (
          <View style={styles.lottieWrap} pointerEvents="none">
            <LottieView
              source={require('../assets/lottie/particles.json')} // put any subtle particles/sparkle json here
              autoPlay
              loop
              style={{ width: 260, height: 260, opacity: 0.55 }}
            />
          </View>
        ) : null}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  aura: {
    position: 'absolute',
    width: 260, height: 260, borderRadius: 130,
    shadowOpacity: 0.35, shadowRadius: 24, shadowOffset: { width: 0, height: 0 },
  },
  ring: {
    width: 180, height: 180, borderRadius: 90, borderWidth: 2,
    opacity: 0.8,
  },
  titleWrap: { marginTop: 24, alignItems: 'center' },
  title: { fontSize: 28, fontWeight: '800', letterSpacing: 0.6 },
  shimmerLine: { marginTop: 8, height: 2, width: 180, overflow: 'hidden', borderRadius: 2, backgroundColor: 'rgba(255,255,255,0.12)' },
  shimmer: { height: '100%', width: 120, borderRadius: 2 },
  subtitle: { marginTop: 10, fontSize: 14, fontStyle: 'italic' },
  lottieWrap: { position: 'absolute' },
});
