import { Audio, AVPlaybackSource, Sound } from 'expo-av';
import { useEffect, useRef } from 'react';

export function useSoundPlayer(source: AVPlaybackSource, shouldPlay: boolean) {
  const soundRef = useRef<Sound | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { sound } = await Audio.Sound.createAsync(source, { isLooping: true, volume: 0.5 });
      if (!mounted) {
        await sound.unloadAsync();
        return;
      }
      soundRef.current = sound;
      if (shouldPlay) await sound.playAsync();
    })();

    return () => {
      mounted = false;
      if (soundRef.current) {
        soundRef.current.unloadAsync();
        soundRef.current = null;
      }
    };
  }, [source]);

  useEffect(() => {
    (async () => {
      if (!soundRef.current) return;
      if (shouldPlay) await soundRef.current.playAsync();
      else await soundRef.current.pauseAsync();
    })();
  }, [shouldPlay]);

  const play = async () => {
    if (soundRef.current && !shouldPlay) {
      await soundRef.current.playAsync();
    }
  };

  const stop = async () => {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }
  };

  return { play, stop };
}