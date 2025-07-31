import React, { useState } from 'react';
import { View, Text, Dimensions, PanResponder, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';

const { width } = Dimensions.get('window');

export default function InquiryStage5() {
  const [unified, setUnified] = useState(false);
  const barrierOpacity = useSharedValue(1);
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/wholeness.mp3')
    );
    await sound.playAsync();
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const midX = width / 2;
      const crossThreshold = Math.abs(gestureState.moveX - midX);
      if (crossThreshold < 50 && !unified) {
        barrierOpacity.value = withTiming(0, { duration: 1000 });
        setUnified(true);
        playSound();
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }
    },
  });

  const barrierStyle = useAnimatedStyle(() => ({
    opacity: barrierOpacity.value,
  }));

  return (
    <View
      style={[styles.container, { flexDirection: 'row', backgroundColor: theme.colors.background }]}
      {...panResponder.panHandlers}
    >
      <View style={[styles.flexCenter, { width: '50%' }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Me</Text>
      </View>

      <Animated.View
        style={[{
          width: 1,
          backgroundColor: theme.colors.gold,
          height: '100%',
        }, barrierStyle]}
      />

      <View style={[styles.flexCenter, { width: '50%' }]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>World</Text>
      </View>

      {unified && (
        <View style={{
          position: 'absolute',
          bottom: 32,
          paddingHorizontal: 20,
          width: '100%',
        }}>
          <Text style={[styles.text, {
            color: theme.colors.gold,
            fontStyle: 'italic',
            textAlign: 'center',
            marginBottom: 16,
          }]}>
            “You are not in the world. The world is in you.”
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Journal' as never)}
            style={[styles.button, { backgroundColor: theme.colors.gold }]}
          >
            <Text style={[styles.buttonText, { color: theme.colors.background }]}>
              Go to Your Journal
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
