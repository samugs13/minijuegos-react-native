import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Submit(props) {

	return(
		<Button
			id="prev-btn"
			className="btn btn-info"
			onClick={props.click} 
			title="Submit"
		/>
	);

}
