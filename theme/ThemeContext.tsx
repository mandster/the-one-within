// theme/ThemeContext.js

import React, { createContext, useContext, useState, useMemo } from 'react';

// Define your theme structure, including colors
const lightTheme = {
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    gold: '#FFD700', // Example gold color, adjust as needed
    muted: '#A0A0A0', // Example muted color, adjust as needed
    // Add any other colors specific to your light theme
  },
  // Add any other light theme properties here
};

const darkTheme = {
  colors: {
    background: '#121212',
    text: '#FFFFFF',
    gold: '#FFD700', // Gold can remain consistent or be adjusted for dark mode
    muted: '#606060',
    // Add any other colors specific to your dark theme
  },
  // Add any other dark theme properties here
};

// Define your font sizes
const fontSizes = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
};

// Create the Context
// IMPORTANT: The default value here should match the structure of the value
// you intend to provide via the Provider.
const ThemeContext = createContext({
  theme: lightTheme, // Default theme
  toggleTheme: () => {}, // A dummy function for the default
  fontSizes: fontSizes, // ✅ Now includes fontSizes in the default context value
});

// Create the Provider Component
export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme); // You can add logic to determine initial theme (e.g., system preference)

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  // Use useMemo to optimize performance by only re-calculating the context value
  // when `currentTheme` changes. `fontSizes` is static, so it doesn't need
  // to be in the dependency array.
  const contextValue = useMemo(
    () => ({
      theme: currentTheme,
      toggleTheme,
      fontSizes: fontSizes, // ✅ Now includes fontSizes in the memoized context value
    }),
    [currentTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Create the custom hook for easy consumption of the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // This error helps developers know if useTheme is called outside a ThemeProvider
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
