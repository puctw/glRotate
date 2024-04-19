import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Camera from 'expo-camera';

export default function QRCodeScanner(props) {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        Alert.alert("Camera permission is not granted");
        return <View />;
    }

    return (
        <WebView
            style={styles.container}
            allowsInlineMediaPlayback={true}
            mediaPlaybackRequiresUserAction={false}
            onMessage={(event) => {
                if (!event.nativeEvent.data) {
                    if (props.onClosed) {
                        props.onClosed();
                    }
                } else {
                    if (props.onScanned) {
                        const results = JSON.parse(event.nativeEvent.data);
                        props.onScanned(results);
                    }
                }
            }}
            source={{ uri: 'https://tony-xlh.github.io/Vanilla-JS-Barcode-Reader-Demos/React-Native-Webview/?startScan=true' }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
