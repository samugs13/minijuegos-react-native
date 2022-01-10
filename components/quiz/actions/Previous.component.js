import React, {useContext} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
