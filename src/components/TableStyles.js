import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderColor: 'grey',
        height: 120
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    infoContainer: {
        flex: 2,
        justifyContent: 'space-around',
        padding: 10
    },
    text: {
        fontSize: 18
    }
});