import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // background handled via theme
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
  },
  card: {
    borderRadius: 12,
    backgroundColor: 'transparent', // color handled via theme
    padding: 16,
    elevation: 2,
  },
});
