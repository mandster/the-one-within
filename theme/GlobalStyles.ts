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
    // Inside StyleSheet.create({...}) return object:
bubble: {
  margin: spacing.sm,
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},

bubbleText: {
  color: theme.colors.onSurface,
  fontSize: fontSizes.sm,
  fontWeight: fontWeights.medium,
  textAlign: 'center',
  paddingHorizontal: spacing.sm,
},
// Inside createGlobalStyles(theme)
bubbleWrapper: {
  marginHorizontal: 10,
  alignItems: 'center',
  justifyContent: 'center',
},

bubble: {
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 30,
  margin: 10,
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 100,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 2, height: 2 },
  shadowRadius: 4,
  elevation: 3,
},

bubbleText: {
  color: '#fff',
  fontSize: 12,
  fontWeight: 'bold',
  textAlign: 'center',
},

glowCircle: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#fff',
  opacity: 0,
  shadowColor: '#ffffff',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.6,
  shadowRadius: 20,
},
  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingHorizontal: 24,
  },
  splitContainer: {
    flexDirection: 'row',
    height: 1,
    marginBottom: 20,
    position: 'relative',
  },
  leftHalf: {
    flex: 1,
  },
  rightHalf: {
    flex: 1,
  },
  divider: {
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: 1.5,
    backgroundColor: '#f58742',
    shadowColor: '#f58742',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    zIndex: 99,
  },
  bubbleWrap: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
    topTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 32,
      marginBottom: 16,
    },
    splitContainer: {
      flexDirection: 'row',
      height: 1,
      marginHorizontal: 32,
      marginBottom: 30,
    },
    leftHalf: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    divider: {
      width: 1,
      backgroundColor: '#fca', // orange accent line
      shadowColor: '#fca',
      shadowOpacity: 0.6,
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 4,
    },
    rightHalf: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    bubbleWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 40,
      paddingHorizontal: 16,
      gap: 12,
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 5,
    },
    
  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 32,
    marginBottom: 16,
  },
  splitContainer: {
    flexDirection: 'row',
    height: 1,
    marginHorizontal: 32,
    marginBottom: 30,
  },
  leftHalf: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  divider: {
    width: 1,
    backgroundColor: '#fca',
    shadowColor: '#fca',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
  },
  rightHalf: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  bubbleWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
    gap: 12,
  },
  bubble: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: '#fff',
    margin: 6,
    elevation: 6,
  },
  });
