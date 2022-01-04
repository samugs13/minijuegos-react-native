import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';


export default function Score(props) {

	return (
		<h1>
			<span className="badge bg-success" style={{marginLeft: "10px",}}>
				Score: {props.score}/10
			</span>
		</h1>
	);
}
