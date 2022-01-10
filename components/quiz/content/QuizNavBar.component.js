import React from 'react';
import { View, Button } from 'react-native';

import Style, { Colors } from '../../../style/quiz.style';

export default function QuizNavBar(props) {

	function getButtonColor(i){
		if(!props.answerCorrect) return Colors.primary;

		if(props.answerCorrect[i]) return Colors.success;
		else if(props.answerCorrect[i] === false) return Colors.danger;
		else if(i === props.index) return Colors.info;
		else if(props.userAnswers && !props.userAnswers[i]) return Colors.secondary;
		else return Colors.primary;
	}

	function buttonRow() {
		let buttons = [];
		for (let i = 0; i < props.total; i++) {
			buttons.push((
				<Button
					title={`${i+1}`}
					onPress={() => props.onClick(i)}
					key={i}
					color={getButtonColor(i)}
				/>
			))
		}
		return buttons;
	}

	return (
		<View
			label="Quiz Navigation Bar"
			style={Style.quizNavBar}
		>
			{buttonRow()}
		</View>
	);
}
