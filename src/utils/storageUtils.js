import { AsyncStorage } from 'react-native';

export const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.log(`setItem error: ${err}`);
    }
}

export const getItem = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key);

        return JSON.parse(data);
    } catch (err) {
        console.log(`getItem error: ${err}`);
    }
}

export const clearStorage = async () => {
    await AsyncStorage.clear();
}