import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Style from "../../../style/quiz.style";

export default function Question(props) {

	return (
		<View>
			<Text style={Style.question}>
				{props.question}
			</Text>
		</View>
	);
}
