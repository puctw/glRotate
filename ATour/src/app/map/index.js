import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import { Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { checkUrlScanned } from '../urlScanUtility.js';

const MapScreen = () => {
    const navigation = useRouter(); 
    const [circleColor, setCircleColor] = useState('red')
    const [userLocation, setUserLocation
    ] = useState({
        latitude: 40.206736,
        longitude: -8.405763,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [region, setRegion] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        (async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    console.error('Permission to access location was denied');
                    return;
                }

                const location = await Location.getCurrentPositionAsync({
                    accuracy: Location.Accuracy.High,
                });
                const { latitude, longitude } = location.coords;
                const newLocation = {
                    latitude,
                    longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                };
                setUserLocation(newLocation);
                setRegion(newLocation);  
                if (mapRef.current) {
                    mapRef.current.animateToRegion(newLocation, 1000);
                }

                const scanned = await checkUrlScanned();
                setCircleColor(scanned ? 'green' : 'red');
            } catch (error) {
                console.error("Failed to get location or check URL scan status", error);
            }
        })();

        return () => {
            //resetScannedStatus(); 
        };
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.backContainer}>
                <TouchableOpacity   TouchableOpacity onPress={() => navigation.back('/')} style={styles.button}>
                    <Image source={require('../../../assets/backarrow.png')}/>
                </TouchableOpacity>
            </View>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={region}
                onRegionChangeComplete={setRegion}
            >
                <Marker
                    coordinate={userLocation}
                    title="Your Location"
                    description="You are here"
                >
                    <View style={styles.blueCircle} />
                </Marker>
                <Circle
                    center={{
                        latitude: 40.206736,
                        longitude: -8.405763,
                    }}
                    radius={100} 
                    fillColor="rgba(255, 0, 0, 0.5)" 
                    strokeColor="rgba(255, 0, 0, 0.5)" 
                    strokeWidth={1} 
                />
            </MapView>
            <View style={styles.buttonContainer}>
            <TouchableOpacity   TouchableOpacity onPress={() => navigation.push('/camera')} style={styles.button}>
                    <Image source={require('../../../assets/qrcode.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: Dimensions.get('window').width,
    },
    map: {
        zIndex: -1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute',
    },
    blueCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'blue',
    },
    backContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: Dimensions.get('window').width - 10,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end'
    },
    button: {
        
    },
});

export default MapScreen;