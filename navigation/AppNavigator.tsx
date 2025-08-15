// navigation/AppNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// Screens
import HomeScreen from '../screens/Home';
import InquiryStage1 from '../screens/InquiryStage1';
import InquiryStage2 from '../screens/InquiryStage2';
import InquiryStage3 from '../screens/InquiryStage3';
import InquiryStage4 from '../screens/InquiryStage4';
import InquiryStage5 from '../screens/InquiryStage5';
import InquiryStagesMenu from '../screens/InquiryStagesMenu';

import Journal from '../screens/Journal';
import SaintsLibrary from '../screens/SaintsLibrary';
import Settings from '../screens/Settings';
import SilenceTemple from '../screens/SilenceTemple';

import EmbodiedPracticeHome from '../screens/EmbodiedPracticeHome';
import HeartBreathing from '../screens/HeartBreathing';
import LayingDown from '../screens/LayingDown';
import ProgressOverview from '../screens/ProgressOverview';
import ReleasingMovement from '../screens/ReleasingMovement';
import StillSitting from '../screens/StillSitting';
import WalkingMeditation from '../screens/WalkingMeditation';

import { ThemeProvider } from '../theme/ThemeContext';
import MainTabs from './MainTabs';

const Stack = createNativeStackNavigator();

// --- Stack Navigators (unchanged) ---
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
    <Stack.Screen name="ProgressOverview" component={ProgressOverview} />
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

// --- Root Navigator ---
export default function AppNavigator() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainTabs
          HomeStack={HomeStack}
          JournalStack={JournalStack}
          EmbodiedPracticesStack={EmbodiedPracticesStack}
          SilenceTempleStack={SilenceTempleStack}
          SaintsLibraryStack={SaintsLibraryStack}
        />
      </NavigationContainer>
    </ThemeProvider>
  );
}
