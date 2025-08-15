 
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