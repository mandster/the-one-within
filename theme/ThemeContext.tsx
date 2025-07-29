// theme/ThemeContext.tsx
import React, { createContext, useContext, useState, useMemo } from 'react';
import { lightTheme, darkTheme } from './themes';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const value = {
    theme,
    darkMode,
    toggleDarkMode,
    fontSizes: {
      sm: 12,
      md: 16,
      lg: 20,
      xl: 26,
      xxl: 32,
    },
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
