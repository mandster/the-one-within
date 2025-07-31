// theme/styles.ts
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

// ✅ Main entry point for all screen styles
export const createGlobalStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: spacing.md,
      backgroundColor: theme.colors.background,
    },

    title: {
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.bold,
      textAlign: 'center',
      marginBottom: spacing.md,
      color: theme.colors.primary,
    },

    text: {
      fontSize: fontSizes.md,
      fontWeight: fontWeights.regular,
      textAlign: 'center',
      lineHeight: 24,
      color: theme.colors.text,
    },
    subHeading: {
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.bold,
      textAlign: 'center',
      lineHeight: 24,
      color: theme.colors.subHeading,
    },
    textInput: {
      fontSize: fontSizes.md,
      fontWeight: fontWeights.regular,
      textAlign: 'left',
      lineHeight: 24,
      color: theme.colors.text,
    },
  

    button: {
      backgroundColor: theme.colors.surface,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.lg,
      borderRadius: borderRadius.lg,
      alignItems: 'center',
      marginVertical: spacing.sm,
    },

    buttonText: {
      fontSize: fontSizes.md,
      fontWeight: fontWeights.medium,
      color: theme.colors.onSurface,
    },

    backButton: {
      marginTop: spacing.lg,
      alignSelf: 'center',
    },

    card: {
      padding: spacing.md,
      borderRadius: borderRadius.md,
      backgroundColor: '#ffffff20',
      marginVertical: spacing.sm,
    },

    scrollContainer: {
      paddingVertical: 20,
      paddingHorizontal: 16,
    },

    subtitle: {
      fontSize: 16,
      color: theme.colors.text,
      marginBottom: 20,
    },

    practiceButton: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 12,
      marginBottom: 14,
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 2,
    },

    practiceTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.primary,
    },

    practiceSubtitle: {
      fontSize: 14,
      color: theme.colors.textMuted,
      marginTop: 2,
    },
    centeredContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20,
      paddingHorizontal: 20,
    },
    subtitle: {
      marginBottom: 10,
      textAlign: 'center',
    },
    circleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    silenceCard: {
      width: 220,
      height: 220,
      borderRadius: 110,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    gradientCircle: {
      width: 220,
      height: 220,
      borderRadius: 110,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#DDD',
    },
    outerGlow: {
      position: 'absolute',
      width: 260,
      height: 260,
      borderRadius: 130,
      backgroundColor: '#f3e7e940',
      zIndex: -1,
      shadowColor: '#e3eeff',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.6,
      shadowRadius: 30,
    },
    innerCircle: {
      position: 'absolute',
      width: 130,
      height: 130,
      borderRadius: 65,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#444',
    },
    guidingText: {
      marginTop: 10,
      fontSize: 14,
      color: '#888',
      textAlign: 'center',
    },
    statText: {
      fontSize: 14,
      marginTop: 5,
    },
    toggleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginTop: 20,
    },
  });
