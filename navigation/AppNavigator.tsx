// navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Platform } from 'react-native';

import HomeScreen from '../screens/Home';
import InquiryStagesMenu from '../screens/InquiryStagesMenu';
import InquiryStage1 from '../screens/InquiryStage1';
import InquiryStage2 from '../screens/InquiryStage2';
import InquiryStage3 from '../screens/InquiryStage3';
import InquiryStage4 from '../screens/InquiryStage4';
import InquiryStage5 from '../screens/InquiryStage5';

import Settings from '../screens/Settings';
import Journal from '../screens/Journal';
import SaintsLibrary from '../screens/SaintsLibrary';
import SilenceTemple from '../screens/SilenceTemple';

import EmbodiedPracticeHome from '../screens/EmbodiedPracticeHome';
import StillSitting from '../screens/StillSitting';
import ReleasingMovement from '../screens/ReleasingMovement';
import LayingDown from '../screens/LayingDown';
import HeartBreathing from '../screens/HeartBreathing';
import WalkingMeditation from '../screens/WalkingMeditation';

import { useTheme, ThemeProvider } from '../theme/ThemeContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// --- Stack Navigators ---
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="InquiryStagesMenu" component={InquiryStagesMenu} />
    <Stack.Screen name="InquiryStage1" component={InquiryStage1} />
    <Stack.Screen name="InquiryStage2" component={InquiryStage2} />
    <Stack.Screen name="InquiryStage3" component={InquiryStage3} />
    <Stack.Screen name="InquiryStage4" component={InquiryStage4} />
    <Stack.Screen name="InquiryStage5" component={InquiryStage5} />
    <Stack.Screen name="SettingsTab" component={SettingsStack} />
  </Stack.Navigator>
);

const EmbodiedPracticesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="EmbodiedHome" component={EmbodiedPracticeHome} />
    <Stack.Screen name="Still Sitting" component={StillSitting} />
    <Stack.Screen name="Releasing Movement" component={ReleasingMovement} />
    <Stack.Screen name="Laying Down" component={LayingDown} />
    <Stack.Screen name="Heart Breathing" component={HeartBreathing} />
    <Stack.Screen name="Walking Meditation" component={WalkingMeditation} />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SettingsHome" component={Settings} />
  </Stack.Navigator>
);

const JournalStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="JournalHome" component={Journal} />
  </Stack.Navigator>
);

const SilenceTempleStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SilenceTempleHome" component={SilenceTemple} />
  </Stack.Navigator>
);

const SaintsLibraryStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SaintsLibraryHome" component={SaintsLibrary} />
  </Stack.Navigator>
);

// --- Tab Navigator ---
const MainTabNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.gold,
          borderTopWidth: 1,
          height: 60,
          paddingBottom: Platform.OS === 'ios' ? 10 : 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: theme.colors.gold,
        tabBarInactiveTintColor: theme.colors.muted,
        tabBarIcon: ({ focused, color, size }) => {
          const icons: Record<string, string> = {
            HomeTab: focused ? '🏡' : '🏠',
            JournalTab: focused ? '📝' : '📄',
            EmbodiedTab: focused ? '🧘‍♀️' : '🧘',
            SilenceTab: focused ? '🌑' : '🌙',
            SaintsTab: focused ? '📖' : '📚',
          };
          return <Text style={{ color, fontSize: size }}>{icons[route.name]}</Text>;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home' }} />
      <Tab.Screen name="JournalTab" component={JournalStack} options={{ title: 'Journal' }} />
      <Tab.Screen name="EmbodiedTab" component={EmbodiedPracticesStack} options={{ title: 'Practices' }} />
      <Tab.Screen name="SilenceTab" component={SilenceTempleStack} options={{ title: 'Silence' }} />
      <Tab.Screen name="SaintsTab" component={SaintsLibraryStack} options={{ title: 'Saints' }} />
    </Tab.Navigator>
  );
};

// --- Root Navigator ---
export default function AppNavigator() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
