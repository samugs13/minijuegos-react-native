import React, {useContext}  from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Replay(props) {

	return(
		<button id="next-btn" className="btn btn-warning" onClick={props.click}>
			
			<p> Play Again </p>
	
		</button>
	);

}
