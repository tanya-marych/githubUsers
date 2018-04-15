export const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.log(`setItem error: ${err}`);
    }
}

export const getItem = async (key) => {
    try {
        return await JSON.parse(AsyncStorage.getItem(key));
    } catch (err) {
        console.log(`getItem error: ${err}`);
    }
}