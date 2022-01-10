import React from 'react';
import { Button } from 'react-native';

import {Colors} from "../../../style/quiz.style";

export default function Previous(props) {

	return(
		<Button
			id="prev-btn"
			onPress={props.click}
			title="Previous"
			color={Colors.primary}
			disabled={props.disabled}
		/>
	);

}
