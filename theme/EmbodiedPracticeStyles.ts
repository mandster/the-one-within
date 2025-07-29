import { StyleSheet } from 'react-native';

const EmbodiedPracticeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefbf3',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#e0ac00',
    marginBottom: 30,
  },
  practiceList: {
    gap: 20,
  },
  practiceCard: {
    backgroundColor: '#fff8e1',
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  practiceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  practiceSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  backButton: {
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: '#f9c300',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  backButtonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default EmbodiedPracticeStyles;