import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';

export default function ReleasingMovement() {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const styles = createGlobalStyles(theme);
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 1,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -1,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const shakeStyle = {
    transform: [
      {
        translateX: shakeAnim.interpolate({
          inputRange: [-1, 1],
          outputRange: [-10, 10],
        }),
      },
    ],
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.gold }]}>Releasing Movement</Text>
      <Text style={[styles.text, { color: theme.colors.text, marginTop: 10 }]}>
        Let your body shake freely. Surrender control.
        {'\n'}Allow energy to release through movement.
      </Text>

      <Animated.View style={[shakeStyle, { marginTop: 40 }]}>
        <View style={[styles.card]}>
          <Text style={[styles.text, { color: theme.colors.text }]}>
            Feel your body. Let go. Shake it all out.
          </Text>
        </View>
      </Animated.View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.colors.gold }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.buttonText, { color: theme.colors.background }]}>
          ⬅ Back to Practices
        </Text>
      </TouchableOpacity>
    </View>
  );
}