import React, {useContext} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Previous(props) {

	return(
		<Button
			id="prev-btn"
			className="btn btn-info"
			onPress={props.click}
			title="Previous"
		/>
	);

}
