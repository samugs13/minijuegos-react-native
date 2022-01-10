import { StyleSheet } from 'react-native';

const Colors = {
	primary: '#17a2b8',
	secondary: '#d9e2ef',
	success: '#42ba96',
	danger: '#df4759',
	warning: '#ffc107',
	info: '#20c997',
	light: '#f1f4f8',
	dark: '#161c2d',
}

const Style = StyleSheet.create({
	container: {
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
	},

	scrollview: {
	},

	title: {
		fontWeight: 'bold',
		fontSize: 40,
		textAlign: 'center',
		color: Colors.primary,
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
	},

	question: {
		textAlign: 'center',
		fontSize: 25,
		textTransform: 'capitalize',

	},

	author: {
		fontWeight: 'bold',
	},

	answerInput: {
		height: 40,
		borderWidth: 1,
		color: Colors.dark,
		borderRadius: 5,
		padding: 10,
	},

	correct: {
		color: Colors.success,

	},

	incorrect: {
		color: Colors.danger,
	},

	actionBar: {
		flexDirection: "row",
	},

	quizNavBar: {
		flexDirection: "row",
	},

	score: {
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center',
		color: Colors.success,
	},

	timer: {
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center',
	},

})

export default Style;
export { Colors };
