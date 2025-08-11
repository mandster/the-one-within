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
  import { createContext, useContext } from 'react';
import { theme as baseTheme } from './theme';
  
  const ThemeContext = createContext({
    isDark: true,
    toggleTheme: () => {},
    theme: baseTheme,
  });
  
  export const useTheme = () => useContext(ThemeContext);
 
  