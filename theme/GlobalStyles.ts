import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

// Define theme interface for type safety
interface Theme {
  colors: {
    background: string;
    primary: string;
    subHeading: string;
    text: string;
    textMuted: string;
    surface: string;
    onSurface: string;
  };
}

// Design System Tokens
export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
} as const;

export const fontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const borderRadius = {
  sm: 8,
  md: 16,
  lg: 32,
  full: 999,
} as const;

// Global Stylesheet Factory
export const createGlobalStyles = (theme: Theme) =>
  StyleSheet.create({
    // Base Layout
    container: {
      flex: 1,
      padding: spacing.md,
      backgroundColor: theme.colors.background,
    } as ViewStyle,
    scrollViewContent: {
      paddingVertical: spacing.xl,
      paddingHorizontal: spacing.md,
      alignItems: 'center',
    } as ViewStyle,
    centeredContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: spacing.md,
      paddingHorizontal: spacing.md,
    } as ViewStyle,

    // Text Styles
    title: {
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.bold,
      textAlign: 'center',
      marginBottom: spacing.md,
      color: theme.colors.primary,
    } as TextStyle,
    subHeading: {
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.bold,
      textAlign: 'center',
      color: theme.colors.subHeading,
    subtitle: {
      fontSize: fontSizes.md,
      color: theme.colors.text,
      textAlign: 'center',
      marginBottom: spacing.sm,
    } as TextStyle,
    text: {
      fontSize: fontSizes.md,
      fontWeight: fontWeights.regular,
      textAlign: 'center',
      lineHeight: fontSizes.md * 1.5,
      color: theme.colors.text,
    } as TextStyle,
    textMuted: {
      fontSize: fontSizes.sm,
      color: theme.colors.textMuted,
      fontStyle: 'italic',
      textAlign: 'center',
    } as TextStyle,
    guidingText: {
      fontSize: fontSizes.sm,
      color: theme.colors.textMuted,
      textAlign: 'center',
      marginTop: spacing.sm,
    } as TextStyle,
    statText: {
      fontSize: fontSizes.sm,
      color: theme.colors.textMuted,
    } as TextStyle,

    // Buttons
    button: {
      backgroundColor: theme.colors.surface,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.lg,
      borderRadius: borderRadius.lg,
      alignItems: 'center',
      marginVertical: spacing.sm,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 3,
    } as ViewStyle,
    buttonText: {
      fontSize: fontSizes.md,
      fontWeight: fontWeights.medium,
      color: theme.colors.onSurface,
    } as TextStyle,
    navBackButton: {
      marginTop: spacing.lg,
      alignSelf: 'flex-start',
      marginBottom: spacing.md,
    } as ViewStyle,

    // Cards
    card: {
      width: '100%',
      padding: spacing.md,
      borderRadius: borderRadius.md,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.3)',
      backgroundColor: 'rgba(255,255,255,0.15)',
      marginVertical: spacing.sm,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.1,
      shadowRadius: 20,
      elevation: 8,
    } as ViewStyle,
    cardTitle: {
      textAlign: 'center',
      fontWeight: fontWeights.medium,
      fontSize: fontSizes.md,
      marginTop: spacing.sm,
      color: theme.colors.text,
    } as TextStyle,
    cardDescription: {
      textAlign: 'center',
      marginTop: spacing.xs,
      fontWeight: fontWeights.light,
      fontSize: fontSizes.sm,
      color: theme.colors.textMuted,
    } as TextStyle,

    // Practice-Specific Buttons
    practiceButton: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      borderRadius: borderRadius.md,
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      marginBottom: spacing.sm,
    } as ViewStyle,
    practiceTitle: {
      fontSize: fontSizes.md,
      fontWeight: fontWeights.medium,
      color: theme.colors.primary,
    } as TextStyle,

    // Bubbles
    bubbleWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: spacing.md,
      paddingHorizontal: spacing.md,
      gap: spacing.sm,
    } as ViewStyle,
    bubble: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      borderRadius: borderRadius.full,
      margin: spacing.xs,
      backgroundColor: 'rgba(255,255,255,0.22)',
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    } as ViewStyle,
    bubbleText: {
      color: theme.colors.text,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.bold,
      textAlign: 'center',
    } as TextStyle,

    // Reusable Circle UI
    circleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: spacing.sm,
    } as ViewStyle,
    gradientCircle: {
      width: 200,
      height: 200,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 5,
    } as ViewStyle,
    outerGlow: {
      position: 'absolute',
      width: 240,
      height: 240,
      borderRadius: 120,
      backgroundColor: 'rgba(255,223,128,0.15)',
      shadowColor: '#ffdf80',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.4,
      shadowRadius: 25,
      elevation: 0,
    } as ViewStyle,
    innerCircle: {
      position: 'absolute',
      width: 160,
      height: 160,
      borderRadius: 80,
      backgroundColor: 'rgba(255,255,255,0.15)',
      justifyContent: 'center',
      alignItems: 'center',
    } as ViewStyle,

    // UI Controls
    toggleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      marginTop: spacing.md,
    } as ViewStyle,
  });