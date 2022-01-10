import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Style, {Colors} from "../../../style/quiz.style";

export default function Answer(props) {
	const [answer, setAnswer] = useState("");

	useEffect(() => {
		setAnswer(props.answer);
	}, [props.answer]);

	function handleAnswerChange(e) {
		setAnswer(e.target.value);
		props.onAnswerChange(e.target.value);
	}

	function handleKeyPress(e) {
		if (e.key === 'Enter') {
			props.handleEnterKey();
		}
	}

	function checkAnswer() {
		if (props.correct === false) {
			return (
				<Text style={Style.incorrect}>
					{`Incorrect: ${props.correctAnswer}`}
				</Text>
			);
		} else if (props.correct === true){
			return (
				<Text style={Style.correct}>
					Correct!
				</Text>
			);
		}
	}

	function getColor() {
		if (props.correct === false) return Colors.danger;
		else if (props.correct === true) return Colors.success;
		else return "black";
	}

	return (
		<View className="col-7 mx-auto">
			<TextInput
				id="user-answer"
				onChange={handleAnswerChange}
				onKeyPress={handleKeyPress}
				style={StyleSheet.compose(
					Style.answerInput,
					{
						borderColor: getColor()
					}
				)}
				value={answer}
				editable={props.correct == null}
				returnKeyType="next"
			>
			</TextInput>
			<View style={Style.container}>
				{checkAnswer()}
			</View>
		</View>
	);
}
