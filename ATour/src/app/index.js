import React from 'react';
import { View, Text, Pressable, Image, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
import HomeScreenStyle from './homeStyles.js';
const Home = () => {
	const navigation = useRouter();
	return (
		<View style={HomeScreenStyle.container}>
			<Image
				source={require('../../assets/ATourLogo.png')}
				style={HomeScreenStyle.logo}
				resizeMode='contain'
			/>
			<Image
				source={require('../../assets/turism.jpg')}
				style={HomeScreenStyle.turism}
				resizeMode='contain'
			/>
			<View style={HomeScreenStyle.buttonContainer}>
				<Pressable
					style={HomeScreenStyle.startButton}
					onPress={() => navigation.push('/register')}
				>
					<Text style={HomeScreenStyle.buttonText}>Sign up</Text>
				</Pressable>
				<Pressable
					style={HomeScreenStyle.startButton}
					onPress={() => navigation.push('/map')}
				>
					<Text style={HomeScreenStyle.buttonText}>Sign in</Text>
				</Pressable>
				<Pressable
					style={HomeScreenStyle.startButton}
					onPress={() => navigation.push('/map')}
				>
					<Text style={HomeScreenStyle.buttonText}>Click to Start</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default Home;
