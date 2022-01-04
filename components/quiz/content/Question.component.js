import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Question(props) {

	return (
		<View>
			<Text>{props.question}</Text>
		</View>
	);
}
