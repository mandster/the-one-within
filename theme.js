// theme.ts
export const theme = {
    colors: {
      background: '#101010',
      card: '#1c1c1c',
      gold: '#ffd700',
      white: '#ffffff',
      gray: '#888888',
      text: '#e0e0e0',
      error: '#ff4d4f',
      dark: '#000000',
    },
    spacing: {
      sm: 10,
      md: 16,
      lg: 24,
      xl: 32,
    },
    fontSizes: {
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24,
      xxl: 30,
    },
    fonts: {
      regular: 'System',
      medium: 'System',
      bold: 'System',
    },
    radius: {
      sm: 8,
      md: 12,
      lg: 20,
    },
  };
  
  // ThemeContext.tsx
  import React, { createContext, useContext, useState, ReactNode } from 'react';
  import { theme as baseTheme } from './theme';
  
  const ThemeContext = createContext({
    isDark: true,
    toggleTheme: () => {},
    theme: baseTheme,
  });
  
  export const useTheme = () => useContext(ThemeContext);
  
  export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(true);
  
    const toggleTheme = () => setIsDark((prev) => !prev);
  
    const theme = {
      ...baseTheme,
      colors: {
        ...baseTheme.colors,
        background: isDark ? baseTheme.colors.dark : baseTheme.colors.white,
        text: isDark ? baseTheme.colors.text : baseTheme.colors.dark,
        card: isDark ? baseTheme.colors.card : '#f5f5f5',
      },
    };
  
    return (
      <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  // styles.ts
  import { StyleSheet } from 'react-native';
  import { theme } from './theme';
  
  export const GlobalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: theme.spacing.lg,
      paddingTop: theme.spacing.xl,
    },
    title: {
      fontSize: theme.fontSizes.xl,
      fontWeight: '600',
      color: theme.colors.gold,
      marginBottom: theme.spacing.md,
    },
    text: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text,
    },
    card: {
      backgroundColor: theme.colors.card,
      borderRadius: theme.radius.md,
      padding: theme.spacing.md,
      marginBottom: theme.spacing.md,
    },
  });