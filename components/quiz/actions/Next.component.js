import React from 'react';
import { Button } from 'react-native';

import {Colors} from "../../../style/quiz.style";

export default function Next(props) {

	return(
		<Button
			id="next-btn"
			onPress={props.click}
			title="Next"
			color={Colors.primary}
			disabled={props.disabled}
		/>
	);

}
