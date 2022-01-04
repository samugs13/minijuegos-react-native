import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Submit(props) {

	return(
		<button id="prev-btn" className="btn btn-info" onClick={props.click} >
		
			<p> Submit </p>
	
		</button>
	);

}
