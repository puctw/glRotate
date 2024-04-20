import { StyleSheet } from 'react-native';

export const HomeScreenStyle = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  button: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
export default HomeScreenStyle;