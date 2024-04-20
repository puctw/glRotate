import React from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Button
				title='Menu'
				onPress={() => console.log('Botão pressionado')}
				style={styles.button}
			/>
			<Link push href='./camera' asChild>
				<Pressable>
					<Text>Camera</Text>
				</Pressable>
			</Link>
			<Text style={styles.text}>Bem-vindo à Tela Inicial!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
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
	},
});

export default HomeScreen;
