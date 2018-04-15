import { StyleSheet } from 'react-native';

const borderColor = 'white';
const headerBgColor = '#AFCDE7';
const cellBgColor = '#D8E6F3';

export default StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row'
    },
    rowContainer: {
        height: 120,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor,
        backgroundColor: cellBgColor
    },
    headerContainer: {
        borderWidth: 1,
        borderColor,
        borderRightWidth: 0,
        height: 50,
    },
    headerInfoContainer: {
        flex:1,
        backgroundColor: headerBgColor,
        padding: 10
    },
    headerAvatarContainer: {
        width: 120,
        borderRightWidth: 1,
        borderColor,
        backgroundColor: headerBgColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 2,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 5
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
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    text: {
        fontSize: 18,
        marginBottom: 10
    },
    link: {
        fontSize: 16,
        textDecorationLine: 'underline'
    }
});