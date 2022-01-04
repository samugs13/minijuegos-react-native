import React, {useContext}  from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Next(props) {

	return(
		<button id="next-btn" className="btn btn-info" onClick={props.click}>

			<p> Next </p>

		</button>
	);

}
