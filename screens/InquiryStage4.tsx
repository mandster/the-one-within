import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';
import { createGlobalStyles } from '../theme/GlobalStyles';

export default function InquiryStage4() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  const bubbleData = [
    { label: 'Mind', color: '#f66' },
    { label: 'Thought', color: '#fa3' },
    { label: 'Memory', color: '#4af' },
    { label: 'Ego', color: '#b6f' },
    { label: 'Self', color: '#6d6' },
  ];

  const [tappedBubbles, setTappedBubbles] = useState<string[]>([]);

  const handleBubbleTap = (label: string) => {
    if (!tappedBubbles.includes(label)) {
      setTappedBubbles((prev) => [...prev, label]);
    }
  };

  useEffect(() => {
    if (tappedBubbles.length === bubbleData.length) {
      setTimeout(() => {
        navigation.navigate('InquiryStage5' as never);
      }, 600); // optional slight delay for animation
    }
  }, [tappedBubbles]);

  return (
    <LinearGradient
      colors={['#ffffff', '#dbeeff']} // white to bluish
      style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}
    >
      <Image
        source={require('../assets/eyes-mirror.png')}
        style={{ width: 180, height: 180, borderRadius: 90, marginBottom: 24 }}
      />

      <Text style={[styles.title, { textAlign: 'center', color: theme.colors.text }]}>
        Where Is the One Watching From?
      </Text>

      <Text style={[styles.text, {
        fontStyle: 'italic',
        marginTop: 20,
        textAlign: 'center',
        color: theme.colors.muted,
      }]}>
        “Who sees this seeing?”
      </Text>

      {/* Bubble Row */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 40, justifyContent: 'center' }}>
        {bubbleData.map(({ label, color }, index) => {
          const isTapped = tappedBubbles.includes(label);
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleBubbleTap(label)}
              disabled={isTapped}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isTapped ? 'white' : color,
                opacity: isTapped ? 0.3 : 1,
                shadowColor: '#000',
                shadowOpacity: 0.2,
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 6,
                elevation: 4,
              }}
            >
              {!isTapped && (
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>
                  {label}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Progress Indicator */}
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        {bubbleData.map(({ label }, i) => (
          <View
            key={i}
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              marginHorizontal: 6,
              backgroundColor: tappedBubbles.includes(label) ? theme.colors.primary : '#ccc',
              opacity: tappedBubbles.includes(label) ? 1 : 0.5,
            }}
          />
        ))}
      </View>

      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.button, { marginTop: 30 }]}>
        <Text style={styles.buttonText}>← Back</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
