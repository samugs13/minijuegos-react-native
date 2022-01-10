import React from 'react';
import { Button } from 'react-native';

import {Colors} from "../../../style/quiz.style";

export default function Reset(props) {

	return(
		<Button
			id="next-btn"
			onPress={props.click}
			title="Reset"
			color={Colors.warning}
		/>
	);

}
