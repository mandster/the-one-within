import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing, Text } from 'react-native';
import { useSoundPlayer } from '../hooks/useSoundPlayer';
import { createGlobalStyles } from '../theme/GlobalStyles';
import { useTheme } from '../theme/ThemeContext';

const steps = ['Breathe In', 'Hold', 'Breathe Out', 'Hold'];

export default function WalkingMeditation() {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [stepPhase, setStepPhase] = useState(0);

  // Initialize sound player
  const { play, stop } = useSoundPlayer(require('../assets/alpha-breath.mp3'), isSoundOn);

  // Handle focus and unfocus events
  useFocusEffect(
    useCallback(() => {
      // Screen is focused, start or resume sound if isSoundOn is true
      if (isSoundOn) {
        play();
      }

      // Cleanup: Stop sound when screen loses focus
      return () => {
        stop();
      };
    }, [isSoundOn, play, stop])
  );

  // Handle breathing phase changes
  useEffect(() => {
    const id = setInterval(() => setStepPhase(p => (p + 1) % steps.length), 4000);
    return () => clearInterval(id);
  }, []);

  // Handle scaling animation for circle
  useEffect(() => {
    switch (stepPhase) {
      case 0: // Breathe In
        Animated.timing(scaleAnim, {
          toValue: 1.3,
          duration: 4000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }).start();
        break;
      case 2: // Breathe Out
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 4000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }).start();
        break;
      default:
        // Hold phases, do nothing
        break;
    }
  }, [stepPhase, scaleAnim]);

  return (
    <LinearGradient
      colors={['#4A2A0A', '#3A1A05']}
      style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}
    >
      <Animated.View
        style={[
          {
            width: 150,
            height: 150,
            borderRadius: 75,
            backgroundColor: '#FFAB40',
            shadowColor: '#FFAB40',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 20,
            elevation: 10,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      />
      <Text style={[styles.title, { marginTop: 40, color: theme.colors.text, fontSize: 22 }]}>
        {steps[stepPhase]}
      </Text>
    </LinearGradient>
  );
}