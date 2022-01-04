import React, {useContext}  from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Reset(props) {

	return(
		<button id="next-btn" className="btn btn-warning" onClick={props.click}>

			<p> Reset </p>

		</button>
	);

}
