// hooks/useSoundPlayer.ts
import { useCallback, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Audio } from 'expo-av';

export const useSoundPlayer = (soundFile: any, isSoundOn: boolean) => {
  const soundRef = useRef<Audio.Sound | null>(null);

  const playSound = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
      }
      const { sound } = await Audio.Sound.createAsync(soundFile, {
        isLooping: true,
        volume: 0.4,
      });
      soundRef.current = sound;
      await sound.playAsync();
    } catch (error) {
      console.warn('Failed to play sound:', error);
    }
  };

  const stopSound = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.stopAsync();
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }
    } catch (error) {
      console.warn('Failed to stop sound:', error);
    }
  };

  // Start/stop when screen is focused/unfocused
  useFocusEffect(
    useCallback(() => {
      if (isSoundOn) playSound();
      return () => {
        stopSound();
      };
    }, [isSoundOn])
  );

  return { stopSound, playSound }; // Optional external control
};
