import React, { useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';

import Style from '../../style/quiz.style';

import Actionbar from './content/Actionbar.component';
import Score from './content/Score.component'
import QuizNavBar from './content/QuizNavBar.component';
import Question from './content/Question.component'
import Photo from './content/Photo.component'
import Answer from './content/Answer.component'
import Author from './content/Author.component'
import Timer from './content/Timer.component'

export default function Quiz(props) {

	const [quizzes, setQuizzes] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [currentQuiz, setCurrentQuiz] = useState(0);
	const [score, setScore] = useState(0);
	const [finished, setFinished] = useState(false);

	const [timer, setTimer] = useState({
		minutes: 20,
		seconds: 0
	});

	const [userAnswers, setUserAnswers] = useState([]);
	const [answerCorrect, setAnswerCorrect] = useState([]);

	async function fetchData() {
		const res = await fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=c077a2641b40e0fb129a");
		const myjson = await res.json();
		setQuizzes(myjson);
		setUserAnswers(new Array(myjson.length).fill(""));
		setAnswerCorrect(new Array(myjson.length).fill(null));
		setLoaded(true);
	}

	useEffect(() => {
		fetchData();
		changeButtonState('prev-btn', false);
	}, []);

	useEffect(() => {
		// Set buttons state
		if (!loaded) {
			changeButtonState('prev-btn', false);
			changeButtonState('next-btn', false);
			changeButtonState('submit-btn', false);
		} else if (currentQuiz === 0) {
			changeButtonState('prev-btn', false);
			changeButtonState('next-btn', true);
			changeButtonState('submit-btn', true);
		} else if (currentQuiz === quizzes.length - 1) {
			changeButtonState('next-btn', false);
			changeButtonState('prev-btn', true);
			changeButtonState('submit-btn', true);
		} else {
			changeButtonState('prev-btn', true);
			changeButtonState('next-btn', true);
			changeButtonState('submit-btn', true);
		}
	}, [loaded, currentQuiz, quizzes]);
	
	useEffect(() => {
		// Set saved user answer
		const answerField = document.getElementById('user-answer');
		if (answerField) {
			answerField.value = userAnswers[currentQuiz];
		}
	
	}, [loaded, currentQuiz, userAnswers]);
	
	useEffect(() => {
		const answerField = document.getElementById('user-answer');
		if (answerField) {
			answerField.disabled = !!finished;
		}
	}, [finished]);

	function nextQuiz() {
		if (currentQuiz < quizzes.length - 1) {
			setCurrentQuiz(currentQuiz + 1);
		} else {
			handleAnswerSubmit();
		}
	}

	function nextClick(){
		setCurrentQuiz(currentQuiz + 1);
	}

	function previousClick(){
		setCurrentQuiz(currentQuiz - 1);
	}

	function reset(){
		setQuizzes([]);
		setLoaded(false);
		setCurrentQuiz(0);
		setScore(0);
		setFinished(false);
		setUserAnswers([])
		fetchData();
		changeButtonState('prev-btn', false);
	}

	function changeButtonState(buttonName, state){
		const button = document.getElementById(buttonName)
		if (button) {
			button.disabled = !state;
		}
	}

	function onChangeUserAnswer(answer){
		const list = [...userAnswers];
		list[currentQuiz] = answer;
		setUserAnswers(list);
	}

	function handleAnswerSubmit() {
		let acertadas = 0
		let list = [...answerCorrect];
		for (let i = 0; i < quizzes.length; i++) {
			if (userAnswers[i].toLowerCase() === quizzes[i].answer.toLowerCase()) {
				acertadas += 1;
				list[i] = true;
			}
			else {
				list[i] = false;
			}
		}

		setScore(acertadas);
		setAnswerCorrect(list);
		setFinished(true)
	}

	function onTimeOut() {
		// showNotification("notification-timeout");
		handleAnswerSubmit();
	}

	// function showNotification(id) {
	// 	const toastAnswer = document.getElementById(id)
	// 	const toast = new Toast(toastAnswer);
	// 	toast.show()
	// }
	
	return (
		<View style={Style.container}>
			<Text style={Style.title}>QUIZ</Text>
			{quizzes[currentQuiz] ? (
				<View style={Style.container}>
					<View>
						<QuizNavBar index={currentQuiz} total={quizzes.length} userAnswers={userAnswers} answerCorrect={answerCorrect} onClick={setCurrentQuiz}/>
					</View>
					<View>
						<View>
							<Photo photo={quizzes[currentQuiz].attachment}/>
						</View>
						<View >
							<View>
								{finished ? (
									<Score score={score}/>
								) : (
									<Timer initialMinute={timer.minutes} initialSeconds={timer.seconds} onTimeOut={onTimeOut}/>
								)}
							</View>
							<View>
								<Question question={quizzes[currentQuiz].question}/>
							</View>
							<View>
								<Answer onAnswerChange={onChangeUserAnswer} correctAnswer={quizzes[currentQuiz].answer} correct={answerCorrect[currentQuiz]} handleEnterKey={nextQuiz}/>
							</View>
							<View style={Style.container}>
								<Actionbar nextClick={nextClick} previousClick={previousClick} submitClick={handleAnswerSubmit} reClick={reset} finished={finished}/>
							</View>
							<View>
								<Author author={quizzes[currentQuiz].author}/>
							</View>
						</View>
					</View>
				</View>
			) : (
				<View role="status">
					<Text>Loading...</Text>
				</View>
			) }
		</View>
	);
}
