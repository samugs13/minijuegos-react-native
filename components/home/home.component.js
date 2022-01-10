import React  from 'react';
import { Text, View, Button } from 'react-native';

import Style, { Colors } from "../../style/quiz.style";

export default function Home(props) {
	return (
		<View>
			<Text style={Style.title}>JUEGOS PARA TODOS</Text>
			<Text style={Style.container}>La mejor página de minijuegos</Text>
			<Button
				title="TicTacToe"
				onPress={() => props.navigation.navigate("Tictactoe") }
				color={Colors.primary}
			/>
			<Button
				title="Quiz"
				onPress={() => props.navigation.navigate("Quiz") }
				color={Colors.primary}
			/>
		</View>
	);
}
