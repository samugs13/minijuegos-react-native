import React, { useContext } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Style from "../../../style/quiz.style";

export default function Answer(props) {

	function handleAnswerChange(e) {
		props.onAnswerChange(e.target.value);
	}

	function handleKeyPress(e) {
		if (e.key === 'Enter') {
			props.handleEnterKey();
		}
	}

	function checkAnswer() {
		if (props.correct === false) return "is-invalid";
		else if (props.correct === true) return "is-valid";
		else return "";
	}

	return (
		<View className="col-7 mx-auto">
			<TextInput
				className={`form-control ${checkAnswer()}`}
				id="user-answer"
				type="text"
				onChange={handleAnswerChange}
				onKeyPress={handleKeyPress}
			>
			</TextInput>
			<Text 
				className="valid-feedback"
				style={Style.correct}>
				
				Correct!

			</Text>
			<Text 
				className="invalid-feedback"
				style={Style.incorrect}
			>
				{`Incorrect: ${props.correctAnswer}`}
			</Text>
		</View>
	);
}
