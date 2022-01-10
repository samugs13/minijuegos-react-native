import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        color:'blue'
    },

    img: {
        width: 350,
		height: 350,
        margin: 'auto',
    },

    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 'auto',
        display: 'block',
    },

    question: {
        textAlign: 'center',
        fontsize: 25,
        textTransform: 'capitalize',

    },

    author: {
        fontWeight: 'bold',
    },

    correct: {
        color:'green'

    },

    incorrect: {
        color:'red'
    },

    actionBar: {
        flexDirection: "row",
    },

    quizNavBar: {
        flexDirection: "row",
    },
})

export default Style;
