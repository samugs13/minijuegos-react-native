import React from 'react';
import { View, Text } from 'react-native';
import Style from '../../../style/quiz.style';

export default function QuizNavBar(props) {

	function getButtonColor(i){
		if(!props.answerCorrect) return "-primary";

		if(props.answerCorrect[i]) return "-success";
		else if(props.answerCorrect[i] === false) return "-danger";
		else if(props.userAnswers && !props.userAnswers[i]) return "-secondary";
		else return "-primary";
	}

	function getButtonSelected(i) {
		if (i === props.index) {
			return "";
		} else {
			return "-outline";
		}
	}

	function getButton(i) {
		var button = "btn";
		button += getButtonSelected(i);
		button += getButtonColor(i);
		return button;
	}

	function buttonRow() {
		let buttons = [];
		for (let i = 0; i < props.total; i++) {
			buttons.push((
				<button
					className={`btn ${getButton(i)}`}
					onClick={() => props.onClick(i)}
					key={i}
				>
					{i+1}
				</button>
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
