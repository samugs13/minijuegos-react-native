import React, {useContext}  from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Next(props) {

	return(
		<Button
			id="next-btn"
			onPress={props.click}
			title="Next"
		>
		</Button>
	);

}
