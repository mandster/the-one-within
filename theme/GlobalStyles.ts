import { StyleSheet } from 'react-native';

export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
};

export const fontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 8,
  md: 16,
  lg: 32,
  full: 999,
};

export const createGlobalStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: spacing.md,
      backgroundColor: theme.colors.background,
    },

    scrollContainer: {
      paddingVertical: 20,
      paddingHorizontal: 16,
    },

    title: {
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.bold,
      textAlign: 'center',
      marginBottom: spacing.md,
      color: theme.colors.primary,
    },

    subHeading: {
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.bold,
      textAlign: 'center',
      color: theme.colors.subHeading,
    },

    text: {
      fontSize: fontSizes.md,
      fontWeight: fontWeights.regular,
      textAlign: 'center',
      lineHeight: 24,
      color: theme.colors.text,
    },

    textMuted: {
      fontSize: fontSizes.sm,
      color: theme.colors.textMuted,
      fontStyle: 'italic',
      textAlign: 'center',
    },

    button: {
      backgroundColor: theme.colors.surface,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.lg,
      borderRadius: borderRadius.lg,
      alignItems: 'center',
      marginVertical: spacing.sm,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 3,
    },

    buttonText: {
      fontSize: fontSizes.md,
      fontWeight: fontWeights.medium,
      color: theme.colors.onSurface,
    },

    navBackButton: {
      marginTop: spacing.lg,
      alignSelf: 'flex-start',
      marginBottom: spacing.md,
    },

    card: {
      padding: spacing.md,
      borderRadius: borderRadius.md,
      backgroundColor: '#ffffff15',
      marginVertical: spacing.sm,
      borderColor: '#ffffff30',
      borderWidth: 1,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 2,
    },

    cardGlass: {
      backgroundColor: '#ffffff10',
      borderRadius: borderRadius.md,
      borderWidth: 1,
      borderColor: '#ffffff22',
      shadowColor: '#fff',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 20,
    },

    glow: {
      shadowColor: '#fff',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.3,
      shadowRadius: 20,
    },

    practiceButton: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 20,
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      marginBottom: 12,
    },

    practiceTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.primary,
    },

    bubble: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 999,
      margin: 6,
      backgroundColor: '#ffffff22',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 2, height: 2 },
      shadowRadius: 4,
      elevation: 4,
    },

    bubbleText: {
      color: '#fff',
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.bold,
      textAlign: 'center',
    },

    bubbleWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 20,
      paddingHorizontal: 16,
      gap: 12,
    },

    guidingText: {
      fontSize: fontSizes.sm,
      color: '#aaa',
      textAlign: 'center',
      marginTop: spacing.sm,
    },

    progressText: {
      fontSize: fontSizes.sm,
      color: theme.colors.text,
      textAlign: 'center',
      marginTop: 8,
    },

    statText: {
      fontSize: fontSizes.sm,
      color: theme.colors.textMuted,
    },

    shadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 6,
      elevation: 4,
    },
    scrollViewContent: {
      paddingVertical: 40,
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    
    card: {
      width: '100%',
      padding: 20,
      borderRadius: 20,
      borderWidth: 1,
      marginVertical: 10,
      backdropFilter: 'blur(15px)',
      backgroundColor: 'rgba(255,255,255,0.2)',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.1,
      shadowRadius: 20,
      elevation: 8,
    },
    
    cardTitle: {
      textAlign: 'center',
      fontWeight: '600',
      marginTop: 10,
    },
    
    cardDescription: {
      textAlign: 'center',
      marginTop: 4,
      fontWeight: '300',
    },
    
    button: {
      backgroundColor: 'rgba(255,255,255,0.25)',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 16,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 12,
    },
    
    buttonText: {
      color: '#000',
      fontWeight: '500',
      fontSize: 16,
    },
    tabBarStyle: {
      position: 'absolute',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      borderTopWidth: 0,
      marginHorizontal: 20,
      marginBottom: 20,
      borderRadius: 24,
      height: 70,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 6 },
      shadowRadius: 20,
      elevation: 10,
      backdropFilter: 'blur(20px)', // web only
    },
    
    
  });
