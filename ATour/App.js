import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/components/HomeScreen'; // Ajuste o caminho conforme necessário

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});