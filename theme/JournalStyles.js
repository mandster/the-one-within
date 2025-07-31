// theme/JournalStyles.ts
import { StyleSheet } from 'react-native';

export const JournalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 10,
  },
  quote: {
    fontStyle: 'italic',
    fontSize: 14,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    height: 100,
  },
  button: {
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    color: red;
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  timestamp: {
    fontSize: 12,
    marginTop: 8,
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 40,
  },
  image: {
    width: 160,
    height: 160,
    opacity: 0.5,
    marginBottom: 16,
  },
});
