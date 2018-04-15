import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row'
    },
    rowContainer: {
        height: 110,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    headerContainer: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRightWidth: 0,
        height: 40
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 110
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-around',
        padding: 10
    },
    text: {
        fontSize: 20
    },
    link: {
        fontSize: 14
    },
    headerInfoContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerAvatarContainer: {
        width: 110,
        borderRightWidth: 1,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    }
});