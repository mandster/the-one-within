// navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Platform } from 'react-native';

// Import ALL your screens
import HomeScreen from '../screens/Home';
import InquiryStage1 from '../screens/InquiryStage1';
import InquiryStage2 from '../screens/InquiryStage2';
import InquiryStage3 from '../screens/InquiryStage3';
import InquiryStage4 from '../screens/InquiryStage4';
import InquiryStage5 from '../screens/InquiryStage5';
import EmbodiedPracticeHome from '../screens/EmbodiedPracticeHome';
import HeartBreathing from '../screens/HeartBreathing';
import StillSitting from '../screens/StillSitting';
import SilenceTemple from '../screens/SilenceTemple';
import SaintsLibrary from '../screens/SaintsLibrary';
import Journal from '../screens/Journal';
import InquiryStagesMenu from '../screens/InquiryStagesMenu';


// Import your useTheme hook AND ThemeProvider for consistent styling
import { useTheme, ThemeProvider } from '../theme/ThemeContext'; // ✅ Import ThemeProvider

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// --- 1. Define individual Stack Navigators for each major section (Tab) ---

// Home Tab Stack
function HomeStack() {
  const { colors } = useTheme(); // Use theme for header styling if needed
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide header by default for clean look
        // headerStyle: { backgroundColor:theme.colors.background }, // Example themed header
        // headerTintColor: colors.text,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="InquiryStagesMenu" component={InquiryStagesMenu} />

      {/* All Inquiry Stages are part of the Home flow */}
      <Stack.Screen name="InquiryStage1" component={InquiryStage1} />
      <Stack.Screen name="InquiryStage2" component={InquiryStage2} />
      <Stack.Screen name="InquiryStage3" component={InquiryStage3} />
      <Stack.Screen name="InquiryStage4" component={InquiryStage4} />
      <Stack.Screen name="InquiryStage5" component={InquiryStage5} />
    </Stack.Navigator>
  );
}

// Embodied Practices Tab Stack
function EmbodiedPracticesStack() {
    const { colors } = useTheme();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                // headerStyle: { backgroundColor:theme.colors.background },
                // headerTintColor: colors.text,
            }}
        >
            <Stack.Screen name="EmbodiedHome" component={EmbodiedPracticeHome} />
            {/* Now StillSitting and HeartBreathing are part of THIS stack */}
            <Stack.Screen name="StillSitting" component={StillSitting} />
            <Stack.Screen name="HeartBreathing" component={HeartBreathing} />
            {/* Add any other individual practice screens here */}
        </Stack.Navigator>
    );
}

// Journal Tab Stack (If Journal has internal navigation)
function JournalStack() {
  const { colors } = useTheme();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="JournalHome" component={Journal} />
      {/* Add any other screens specific to the Journal section here */}
    </Stack.Navigator>
  );
}

// Silence Temple Tab Stack
function SilenceTempleStack() {
  const { colors } = useTheme();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SilenceTempleHome" component={SilenceTemple} />
    </Stack.Navigator>
  );
}

// Saints Library Tab Stack
function SaintsLibraryStack() {
  const { colors } = useTheme();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SaintsLibraryHome" component={SaintsLibrary} />
    </Stack.Navigator>
  );
}

// --- 2. Define the Main Bottom Tab Navigator ---

function MainTabNavigator() {
    const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hide headers for tabs, as each tab has its own stack
        tabBarStyle: {
          backgroundColor:theme.colors.background, // Themed background
          borderTopColor: theme.colors.gold, // Themed border
          borderTopWidth: 1,
          height: 60, // Adjust height as needed
          paddingBottom: Platform.OS === 'ios' ? 10 : 5, // Adjust padding for iOS notch
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: theme.colors.gold, // Themed active color
        tabBarInactiveTintColor: theme.colors.muted, // Themed inactive color
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // You can customize icons based on route name here
          if (route.name === 'HomeTab') {
            iconName = focused ? '🏡' : '🏠';
          } else if (route.name === 'EmbodiedTab') {
            iconName = focused ? '🧘‍♀️' : '🧘';
          } else if (route.name === 'JournalTab') {
            iconName = focused ? '📝' : '📄';
          } else if (route.name === 'SilenceTab') {
            iconName = focused ? '🌑' : '🌙';
          } else if (route.name === 'SaintsTab') {
            iconName = focused ? '📖' : '📚';
          }
          // You'd typically use an icon library here (e.g., Ionicons, FontAwesome)
          // For now, using emojis as placeholders
          return <Text style={{ color, fontSize: size }}>{iconName}</Text>;
        },
      })}
    >
      {/* Each Tab.Screen now points to its own Stack Navigator */}
      <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home' }} />
      <Tab.Screen name="JournalTab" component={JournalStack} options={{ title: 'Journal' }} />
      <Tab.Screen name="EmbodiedTab" component={EmbodiedPracticesStack} options={{ title: 'Practices' }} />
      <Tab.Screen name="SilenceTab" component={SilenceTempleStack} options={{ title: 'Silence' }} />
      <Tab.Screen name="SaintsTab" component={SaintsLibraryStack} options={{ title: 'Saints' }} />
    </Tab.Navigator>
  );
}

// --- 3. The Root App Navigator ---

export default function AppNavigator() {
  return (
    // ✅ Wrap NavigationContainer with ThemeProvider
    <ThemeProvider>
      <NavigationContainer>
        {/* The MainTabNavigator is the single root screen now */}
        <MainTabNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}