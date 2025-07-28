
// App.js (or your root component)
import React from 'react';
import { ThemeProvider } from './theme/ThemeContext'; // Assuming this exports ThemeProvider
import ThemedScreen from './components/ThemedScreen'; // Your component that uses the theme
import AppNavigator from './navigation/AppNavigator';


export default function App() {
  return (
    // THE MOST IMPORTANT PART: Wrap your app with the ThemeProvider
    <ThemeProvider>
      <ThemedScreen />
      <AppNavigator />
    </ThemeProvider>
  );
}