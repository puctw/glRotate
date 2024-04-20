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
                resizeMode="contain"
            />
            <View style={HomeScreenStyle.circle} />
            <Text style={HomeScreenStyle.text}>ATour</Text>
            <Link push href='./camera' asChild>
                <Pressable style={HomeScreenStyle.startButton}>
                    <Text style={HomeScreenStyle.buttonText}>Click to Start</Text>  
                </Pressable>
            </Link>
        </View>
    );
};

export default Home;
