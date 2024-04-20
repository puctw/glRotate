import AsyncStorage from '@react-native-async-storage/async-storage';

const URL_KEY = 'scannedUrlStatus';

export const checkUrlScanned = async () => {
    try {
        const value = await AsyncStorage.getItem(URL_KEY);
        return value === 'True';
    } catch (e) {
        console.error('Failed to fetch scanned status', e);
        return false;
    }
};

export const markUrlAsScanned = async () => {
    try {
        await AsyncStorage.setItem(URL_KEY, 'True');
    } catch (e) {
        console.error('Failed to mark URL as scanned', e);
    }
};

export const resetScannedStatus = async () => {
    try {
        await AsyncStorage.setItem(URL_KEY, 'No');
    } catch (e) {
        console.error('Failed to reset scanned status', e);
    }
};