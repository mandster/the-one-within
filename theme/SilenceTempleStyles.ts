// theme/SilenceTempleStyles.ts
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
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

export default styles;
