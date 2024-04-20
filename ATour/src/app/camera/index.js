import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert, Linking, Image } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function CameraScreen() {
    const navigation = useRouter();
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera permissions to make this work!');
            }
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        Alert.alert('Scan successful!', `Bar code with type ${type} and data ${data} has been scanned!`, [
            { text: "OK", onPress: () => checkAndNavigate(data) }
        ]);
    };

    const checkAndNavigate = (url) => {
        const urlPattern = new RegExp('^(https?:\\/\\/)?'+ 
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
            '(\\#[-a-z\\d_]*)?$','i');
        if (urlPattern.test(url)) {
            Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
        } else {
            Alert.alert("Invalid URL", "The scanned data is not a valid URL.");
        }
    };

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission} title='Grant Permission' />
                <Button onPress={() => navigation.replace('/')} title='Home' />
            </View>
        );
    }

    function toggleCameraType() {
        setType((current) =>
            current === CameraType.back ? CameraType.front : CameraType.back
        );
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                        <Image
                            style={styles.flip}
                            source={require('../../../assets/flip.png')}
                        />
                    </TouchableOpacity>
                    <Button onPress={() => navigation.replace('/')} title='Home' />
                    {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        aspectRatio: 3 / 4,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    flip: {
        width: 45,
        height: 45,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});