import React from 'react';
import { Button } from 'react-native';

import {Colors} from "../../../style/quiz.style";

export default function Submit(props) {

	return(
		<Button
			id="prev-btn"
			onPress={props.click}
			title="Submit"
			color={Colors.danger}
		/>
	);

}
