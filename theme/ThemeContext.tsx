// theme/ThemeContext.tsx
import React, { createContext, useContext, useState, useMemo } from 'react';
import { lightTheme, darkTheme } from './themes';

type ThemeContextType = {
  theme: typeof lightTheme;
  darkMode: boolean;
  toggleDarkMode: () => void;
  fontSizes: { sm: number; md: number; lg: number; xl: number; xxl: number };
  radii: { sm: number; md: number; lg: number };
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const value = {
    theme,
    darkMode,
    toggleDarkMode,
    fontSizes: {
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24,
      xxl: 32,
    },
    radii: {
      sm: 6,
      md: 12,
      lg: 24,
    },
    colors: {
      background: '#f3f4f6',
      surface: 'rgba(255,255,255,0.5)',
      gold: '#e0a96d',
      text: '#111827',
      textMuted: '#6b7280',
      primary: '#007f5c',
      tabHighlight: 'rgba(255,255,255,0.3)',
    },
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
