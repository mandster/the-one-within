// navigation/MainTabs.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { memo, useMemo } from 'react';
import {
    Image,
    ImageStyle,
    Platform,
    StyleSheet,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';

type TabProps = {
  HomeStack: React.ComponentType<any>;
  JournalStack: React.ComponentType<any>;
  EmbodiedPracticesStack: React.ComponentType<any>;
  SilenceTempleStack: React.ComponentType<any>;
  SaintsLibraryStack: React.ComponentType<any>;
};

type RouteKey = 'HomeTab' | 'JournalTab' | 'EmbodiedTab' | 'SilenceTab' | 'SaintsTab';

const Tab = createBottomTabNavigator();

const ICONS: Record<RouteKey, any> = {
  HomeTab: require('../assets/icons/HomeIcon.png'),
  JournalTab: require('../assets/icons/JournalIcon.png'),
  EmbodiedTab: require('../assets/icons/PracticesIcon.png'),
  SilenceTab: require('../assets/icons/SilenceIcon.png'),
  SaintsTab: require('../assets/icons/SaintsIcon.png'),
};

// Small helper to keep icons crisp & platform-correct.
const TabIcon = memo(function TabIcon({
  routeName,
  focused,
  tint,
}: {
  routeName: RouteKey;
  focused: boolean;
  tint: string;
}) {
  const size = focused ? 34 : 30; // larger, per your ask
  // On native we can tint PNGs; on web, don't tint bitmaps.
  const base: ImageStyle = { width: size, height: size, resizeMode: 'contain' };
  const style: ImageStyle =
    Platform.OS === 'web' ? base : { ...base, tintColor: tint };

  return (
    <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
      <Image source={ICONS[routeName]} style={style} />
    </View>
  );
});

export default function MainTabs({
  HomeStack,
  JournalStack,
  EmbodiedPracticesStack,
  SilenceTempleStack,
  SaintsLibraryStack,
}: TabProps) {
  const { theme } = useTheme();

  // Build the glassy bar style once per theme
  const tabBarStyle = useMemo<ViewStyle>(
    () => ({
      backgroundColor: theme.colors.tabBackground ?? 'rgba(0,0,0,0.35)',
      borderTopColor: theme.colors.tabsBorder ?? 'rgba(255,255,255,0.08)',
      borderTopWidth: 0, // cleaner
      height: 84,
      paddingBottom: Platform.OS === 'ios' ? 14 : 10,
      paddingTop: 8,
      // “glass” feel:
      shadowColor: '#000',
      shadowOpacity: 0.22,
      shadowOffset: { width: 0, height: 6 },
      shadowRadius: 16,
      elevation: 14,
      // Rounded “floating” bar:
      marginHorizontal: 12,
      marginBottom: 10,
      borderRadius: 20,
      // Web-only blur (does nothing on native; safe to keep):
      ...(Platform.OS === 'web'
        ? ({ backdropFilter: 'blur(48px)' } as any)
        : null),
    }),
    [theme],
  );

  const labelStyle = useMemo<TextStyle>(
    () => ({
      fontSize: 12,
      fontWeight: '600',
    }),
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const key = route.name as RouteKey;
        return {
          headerShown: false,
          tabBarStyle,
          tabBarLabelStyle: labelStyle,
          tabBarActiveTintColor: theme.colors.gold,
          tabBarInactiveTintColor: theme.colors.muted,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon routeName={key} focused={focused} tint={color as string} />
          ),
          // Better a11y
          tabBarAccessibilityLabel:
            {
              HomeTab: 'Home',
              JournalTab: 'Journal',
              EmbodiedTab: 'Practices',
              SilenceTab: 'Silence',
              SaintsTab: 'Saints',
            }[key] || route.name,
        };
      }}
    >
      <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home' }} />
      <Tab.Screen name="JournalTab" component={JournalStack} options={{ title: 'Journal' }} />
      <Tab.Screen
        name="EmbodiedTab"
        component={EmbodiedPracticesStack}
        options={{ title: 'Practices' }}
      />
      <Tab.Screen name="SilenceTab" component={SilenceTempleStack} options={{ title: 'Silence' }} />
      <Tab.Screen name="SaintsTab" component={SaintsLibraryStack} options={{ title: 'Saints' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  iconWrapActive: {
    // subtle glow when focused
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.45,
    shadowRadius: 7,
    elevation: 7,
  } as ViewStyle,
});
