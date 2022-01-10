import React, {useContext}  from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
