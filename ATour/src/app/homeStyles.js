import { StyleSheet } from 'react-native';

export const HomeScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    logo: {
        width: 75,
        height: 75,
        position: 'absolute',
        top: '2%',
        left: '2%',
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'green',
        position: 'absolute',
        top: '2%',
        right: '5%',
    },
    startButton: {
      alignSelf: 'center',
      paddingVertical: 30, 
      paddingHorizontal: 60, 
      backgroundColor: 'green',
      borderRadius: 20, 
      marginBottom: '30%',
    },
    text: {
        fontSize: 60,
        textAlign: 'center',
        margin: 10,
        color: 'green',
        marginTop: '45%',
    },
    buttonText: {
      fontSize: 36,
      color: 'white', 
  },
});

export default HomeScreenStyle;
