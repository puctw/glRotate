import { StyleSheet } from 'react-native';

export const HomeScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#212120',
    },
    logo: {
        width: 75,
        height: 75,
        position: 'absolute',
        top: '2%',
        left: '2%',
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
    createAccountButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        backgroundColor: 'transparent',
        borderRadius: 10, 
    },
    createAccountButtonText: {
        fontSize: 20,
        color: 'white', 
    },
});

export default HomeScreenStyle;