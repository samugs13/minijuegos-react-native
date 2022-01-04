import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Previous(props) {

	return(
		<button id="prev-btn" className="btn btn-info" onClick={props.click} >
		
			<p> Previous </p>
	
		</button>
	);

}
