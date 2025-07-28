import { openBrowserAsync } from 'expo-web-browser';
import { Platform, Linking, TouchableOpacity, Text, GestureResponderEvent, StyleSheet } from 'react-native';
import React from 'react';

/**
 * Elegant external link component for "The One Within"
 * Adds minimalist, intentional design with elevated style
 */
type Props = {
  href: string;
  children: React.ReactNode;
  style?: any;
};

export function ExternalLink({ href, children, style }: Props) {
  const handlePress = async (event: GestureResponderEvent) => {
    event.preventDefault();
    if (Platform.OS === 'web') {
      window.open(href, '_blank');
    } else {
      await openBrowserAsync(href);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.link, style]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    alignSelf: 'flex-start',
  },
  text: {
    color: '#ffd700',
    fontSize: 16,
    fontWeight: '500',
  },
});

/**
 * Bottom tab styling (apply via tabBarOptions or screenOptions)
 */
export const tabBarStyle = {
  backgroundColor: '#000',
  borderTopWidth: 0,
  paddingBottom: 8,
  paddingTop: 4,
  height: 60,
};

export const tabBarLabelStyle = {
  fontSize: 12,
  fontWeight: '600',
  color: '#ffd700',
};
