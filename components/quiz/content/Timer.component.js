import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';

import Style from '../../../style/quiz.style';

export default function Timer(props) {
	const {initialMinute = 0,initialSeconds = 0} = props;
	const [ minutes, setMinutes ] = useState(initialMinute);
	const [ seconds, setSeconds ] =  useState(initialSeconds);

	useEffect(()=>{
		let myInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					if (props.onTimeOut) {
						props.onTimeOut();
					}
					clearInterval(myInterval)
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
		}, 1000)
		return ()=> {
			clearInterval(myInterval);
		};
	});

	return (
		<View>
			<Text style={Style.timer}> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</Text>
		</View>
	);
}
