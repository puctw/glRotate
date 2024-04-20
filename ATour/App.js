import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/components/HomeScreen/HomeScreen'; // Ajuste o caminho conforme necessário
import {globalStyle} from './src/styles/global'; // 
export default function App() {
  return (
    <View style={globalStyle.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}
