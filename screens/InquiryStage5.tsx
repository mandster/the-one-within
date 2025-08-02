// screens/InquiryStage5.tsx
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions,
  StyleSheet,
  Vibration,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles } from '../theme/GlobalStyles';
import { Audio } from 'expo-av';
import { Asset } from 'expo-asset';

const { width } = Dimensions.get('window');
const dropX = width / 2;

const draggableWords = ['Name', 'Career', 'Thoughts', 'Beliefs', 'Body', 'Mind'];

export default function InquiryStage5() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  const [droppedItems, setDroppedItems] = useState<Record<string, 'Me' | 'World'>>({});
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const playPopSound = async () => {
    try {
      const asset = Asset.fromModule(require('../assets/pop.mp3'));
      await asset.downloadAsync();
  
      const { sound } = await Audio.Sound.createAsync({ uri: asset.localUri });
      await sound.playAsync();
    } catch (error) {
      console.warn('Sound playback failed:', error);
    }
  };
  const handleDrop = async (word: string, gestureX: number) => {
    const isRight = gestureX > dropX;
    if (Platform.OS !== 'web') Vibration.vibrate(30);
    await playPopSound();

    setDroppedItems((prev) => ({ ...prev, [word]: isRight ? 'World' : 'Me' }));
  };

  const renderBubbles = () =>
    draggableWords.map((word, index) => {
      const pan = useRef(new Animated.ValueXY()).current;

      const panResponder = useRef(
        PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onPanResponderMove: Animated.event(
            [null, { dx: pan.x, dy: pan.y }],
            { useNativeDriver: false }
          ),
          onPanResponderRelease: (_, gestureState) => {
            handleDrop(word, gestureState.moveX);
            Animated.spring(pan, {
              toValue: { x: 0, y: 0 },
              useNativeDriver: false,
            }).start();
          },
        })
      ).current;

      const isDropped = droppedItems[word];

      return (
        <Animated.View
          key={index}
          {...panResponder.panHandlers}
          style={[
            styles.bubble,
            {
              transform: pan.getTranslateTransform(),
              backgroundColor: isDropped
                ? isDropped === 'Me'
                  ? '#AEDFF7'
                  : '#C2F9B5'
                : '#fff',
              opacity: isDropped ? 0.5 : 1,
            },
            styles.shadow,
          ]}
        >
          <Text style={[styles.practiceTitle, { color: '#333' }]}>{word}</Text>
        </Animated.View>
      );
    });

  return (
    <View style={[styles.container, { paddingTop: 60 }]}>
      <View style={styles.topTextContainer}>
        <Text style={[styles.title, { flex: 1, textAlign: 'center' }]}>Me</Text>
        <Text style={[styles.title, { flex: 1, textAlign: 'center' }]}>World</Text>
      </View>

      <View style={styles.splitContainer}>
        <View style={styles.leftHalf} />
        <View style={styles.divider} />
        <View style={styles.rightHalf} />
      </View>

      <View style={styles.bubbleWrap}>{renderBubbles()}</View>

      {Object.keys(droppedItems).length === draggableWords.length && (
        <TouchableOpacity
          onPress={() => navigation.navigate('InquiryStage6' as never)}
          style={[styles.button, { marginTop: 40 }]}
        >
          <Text style={styles.buttonText}>Continue →</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

