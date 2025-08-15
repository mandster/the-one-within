// theme/GlobalStyles.ts
import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';

// ---- Theme typing (keeps your existing contract but tolerates missing fields) ----
interface Theme {
  colors: {
    background: string;
    surface: string;
    text: string;
    muted?: string;           // optional in your current theme snippet
    gold?: string;            // optional in your current theme snippet
    primary?: string;         // used by titles; we’ll default to gold or text
    subHeading?: string;      // used by subHeading; default to muted or text
    textMuted?: string;       // default to muted
    onSurface?: string;       // default to text
  };
}

// ---- Design tokens ----
export const fontSizes = { xs:12, sm:14, md:16, lg:20, xl:24, xxl:32 } as const;
export const fontWeights = { light:'300', regular:'400', medium:'500', bold:'700' } as const;
export const spacing    = { xs:4,  sm:8,  md:16, lg:24, xl:32, xxl:48 } as const;
export const borderRadius = { sm:8, md:16, lg:32, full:999 } as const;

// ---- Style factory with safe fallbacks (so your palette can stay minimal) ----
export const createGlobalStyles = (theme: Theme) => {
  const c = {
    ...theme.colors,
    primary:    theme.colors.primary    ?? theme.colors.gold ?? theme.colors.text,
    subHeading: theme.colors.subHeading ?? theme.colors.muted ?? theme.colors.text,
    textMuted:  theme.colors.textMuted  ?? theme.colors.muted ?? '#9CA3AF',
    onSurface:  theme.colors.onSurface  ?? theme.colors.text,
    gold:       theme.colors.gold       ?? '#ffb347',
  };

  const glassBorder = 'rgba(255,255,255,0.12)';
  const glassBg     = 'rgba(255,255,255,0.08)';

  return StyleSheet.create({
    // ===== Base Layout =====
    container: {
      flex: 1,
      padding: spacing.md,
      backgroundColor: c.background,
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

    // Helpful wrappers used by Home
    welcomeContainer: {
      width: '100%',
      alignItems: 'center',
      marginBottom: spacing.lg,
    } as ViewStyle,

    cardsContainer: {
      width: '100%',
      rowGap: spacing.md,
      columnGap: spacing.md,
    } as ViewStyle,

    // ===== Text =====
    title: {
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.bold,
      textAlign: 'center',
      marginBottom: spacing.md,
      color: c.primary,
    } as TextStyle,

    subHeading: {
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.bold,
      textAlign: 'center',
      color: colors.subHeading,
    } as TextStyle,

    subtitle: {
      fontSize: fontSizes.md,
      color: c.text,
      textAlign: 'center',
      marginBottom: spacing.sm,
    } as TextStyle,

    text: {
      fontSize: fontSizes.md,
      fontWeight: fontWeights.regular,
      textAlign: 'center',
      lineHeight: fontSizes.md * 1.5,
      color: c.text,
    } as TextStyle,

    textMuted: {
      fontSize: fontSizes.sm,
      color: c.textMuted,
      fontStyle: 'italic',
      textAlign: 'center',
    } as TextStyle,

    guidingText: {
      fontSize: fontSizes.sm,
      color: c.textMuted,
      textAlign: 'center',
      marginTop: spacing.sm,
    } as TextStyle,

    statText: {
      fontSize: fontSizes.sm,
      color: c.textMuted,
    } as TextStyle,

    // ===== Buttons =====
    button: {
      backgroundColor: c.surface,
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
      // subtle glass feel on web only
      ...(Platform.OS === 'web' ? { backdropFilter: 'blur(8px)' as any } : {}),
    } as ViewStyle,

    buttonText: {
      fontSize: fontSizes.md,
      fontWeight: fontWeights.medium,
      color: c.onSurface,
    } as TextStyle,

    navBackButton: {
      marginTop: spacing.lg,
      alignSelf: 'flex-start',
      marginBottom: spacing.md,
    } as ViewStyle,

    // ===== Glass Cards (used by GlassCard & Home) =====
    card: {
      width: '100%',
      padding: spacing.md,
      borderRadius: borderRadius.md,
      borderWidth: 1,
      borderColor: glassBorder,
      backgroundColor: glassBg,
      marginVertical: spacing.sm,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.1,
      shadowRadius: 20,
      elevation: 8,
      ...(Platform.OS === 'web' ? { backdropFilter: 'blur(12px)' as any, WebkitBackdropFilter: 'blur(12px)' } : {}),
    } as ViewStyle,

    cardTitle: {
      textAlign: 'center',
      fontWeight: fontWeights.medium,
      fontSize: fontSizes.md,
      marginTop: spacing.sm,
      color: c.text,
    } as TextStyle,

    cardDescription: {
      textAlign: 'center',
      marginTop: spacing.xs,
      fontWeight: fontWeights.light,
      fontSize: fontSizes.sm,
      color: c.textMuted,
    } as TextStyle,

    // ===== Practice Buttons =====
    practiceButton: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      borderRadius: borderRadius.md,
      backgroundColor: c.surface,
      borderWidth: 1,
      borderColor: c.primary,
      marginBottom: spacing.sm,
    } as ViewStyle,

    practiceTitle: {
      fontSize: fontSizes.md,
      fontWeight: fontWeights.medium,
      color: c.primary,
    } as TextStyle,

    // ===== Bubbles =====
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
      backgroundColor: 'rgba(255,255,255,0.18)',
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
      ...(Platform.OS === 'web' ? { backdropFilter: 'blur(10px)' as any } : {}),
    } as ViewStyle,

    bubbleText: {
      color: c.text,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.bold,
      textAlign: 'center',
    } as TextStyle,

    // ===== Reusable Circle UI (timers / SilenceTemple) =====
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
      overflow: 'hidden', // keeps the circle visually round
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
      alignSelf: 'center',
    } as ViewStyle,

    innerCircle: {
      position: 'absolute',
      width: 160,
      height: 160,
      borderRadius: 80,
      backgroundColor: 'rgba(255,255,255,0.15)',
      justifyContent: 'center',
      alignItems: 'center',
      ...(Platform.OS === 'web' ? { backdropFilter: 'blur(10px)' as any } : {}),
    } as ViewStyle,

    // ===== Small helpers =====
    toggleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      marginTop: spacing.md,
    } as ViewStyle,
  });
};
