// theme/SaintsLibraryStyles.js
import { StyleSheet } from 'react-native';

// Define SaintsLibraryStyles as an object of functions,
// where each function takes the necessary theme properties (colors, fontSizes)
// to apply themed styles.

export const SaintsLibraryStyles = {
  container: (colors) => ({
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 20, // Adjust as needed
  }),
  title: (colors, fontSizes) => ({
    fontSize: fontSizes.xxl, // Using xxl for title
    fontWeight: 'bold',
    color: colors.gold,
    textAlign: 'center',
    marginBottom: 20,
  }),
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // You might want to theme this as well
    paddingBottom: 10,
  },
  tabText: (isActive, colors, fontSizes) => ({
    fontSize: fontSizes.md,
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? colors.gold : colors.muted,
    paddingHorizontal: 15,
    paddingVertical: 8,
  }),
  searchInput: (colors, fontSizes) => ({
    height: 40,
    borderColor: colors.muted,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: colors.text, // Text input color
    fontSize: fontSizes.md,
    backgroundColor: colors.background, // Background of the input
  }),
  scrollContainer: {
    paddingBottom: 20, // Ensure content doesn't get cut off by tab bar
  },
  quoteCard: (colors) => ({
    backgroundColor: colors.background, // Or a slightly different background for cards
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: colors.text, // Subtle shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
    borderColor: colors.muted, // A subtle border
    borderWidth: 0.5,
  }),
  quoteText: (colors, fontSizes) => ({
    fontSize: fontSizes.lg,
    color: colors.text,
    fontStyle: 'italic',
    marginBottom: 10,
    lineHeight: fontSizes.lg * 1.4, // Improve readability
  }),
  quoteFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorText: (colors, fontSizes) => ({
    fontSize: fontSizes.sm,
    color: colors.muted,
    fontWeight: 'bold',
  }),
  emptyText: (colors) => ({
    fontSize: fontSizes.md,
    color: colors.muted,
    textAlign: 'center',
    marginTop: 50,
  }),
};
