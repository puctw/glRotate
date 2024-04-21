import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import HomeScreenStyle from './homeStyles.js';

const Home = () => {
	const navigation = useRouter();
	return (
		<View style={HomeScreenStyle.container}>
			<Image
				source={require('../../assets/logo.png')}
				style={HomeScreenStyle.logo}
				resizeMode='contain'
			/>
			<Text style={HomeScreenStyle.text}>ATour</Text>
			<Pressable
				style={HomeScreenStyle.startButton}
				onPress={() => navigation.push('/map')}
			>
				<Text style={HomeScreenStyle.buttonText}>Click to Start</Text>
			</Pressable>
			<Pressable
				style={HomeScreenStyle.createAccountButton}
				onPress={() => navigation.push('/register')}
			>
				<Text style={HomeScreenStyle.createAccountButtonText}>Criar conta</Text>
			</Pressable>
		</View>
	);
};

export default Home;
