import { StyleSheet } from 'react-native';

export const CardStyles = StyleSheet.create({
  card: {
    borderRadius: 25,
    padding: 20,
    borderWidth: 1,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontWeight: '600',
    marginBottom: 5,
    textAlign: 'center',
  },
  cardDescription: {
    textAlign: 'center',
  },
});
