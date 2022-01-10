import React from 'react';
import { Text, View } from 'react-native';

import Style from '../../../style/quiz.style';

export default function Score(props) {

	return (
		<View style={Style.container}>
			<Text style={Style.score}>
				Score: {props.score}/10
			</Text>
		</View>
	);
}
