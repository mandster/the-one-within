// theme/EmbodiedStyles.ts
import { StyleSheet } from 'react-native';

export const EmbodiedStyles = {
  // Styles for the main container (must be a function if it depends on colors)
  container: (colors: any) => ({
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:theme.colors.background, // Ensure background is themed
  }),

  // Styles for the title (must be a function if it depends on colors and fontSizes)
  title: (colors: any, fontSizes: any) => ({
    fontSize: fontSizes['2xl'], // Example font size, adjust as needed
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: colors.gold, // Ensure title color is themed
  }),

  // Styles for the card (must be a function if it depends on colors)
  card: (colors: any) => ({
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 12, // Example border radius, match GlobalStyles if needed
    borderWidth: 1,
    borderColor: colors.gold, // Ensure border color is themed
    backgroundColor: colors.card, // Ensure card background is themed
    // Adding shadow properties if they were intended, using themed colors
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  }),

  // Styles for text inside the card (must be a function if it depends on colors and fontSizes)
  cardText: (colors: any, fontSizes: any) => ({
    fontSize: fontSizes.lg, // Example font size, adjust as needed
    color: colors.text, // Ensure text color is themed
    fontWeight: '600',
  }),
  // Add any other specific styles for Embodied practices here,
  // making them functions if they depend on `colors` or `fontSizes`.
};