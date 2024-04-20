import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HomeScreenStyle } from './HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={HomeScreenStyle.container}>
      <Button
        title="Menu"
        onPress={() => console.log('Botão pressionado')}
        style={HomeScreenStyle.button}
      />
      <Text style={HomeScreenStyle.text}>Bem-vindo à Tela Inicial!</Text>
    </View>
  );
};


export default HomeScreen;