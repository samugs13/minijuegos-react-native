import React, {useContext}  from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import {Colors} from "../../../style/quiz.style";

export default function Replay(props) {

	return(
		<Button
			id="next-btn"
			onPress={props.click}
			title="Replay"
			color={Colors.success}
		/>
	);

}
