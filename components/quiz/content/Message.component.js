import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Message(props) {

	return (
		<View className="position-fixed top-0 end-0 p-3">
			<View id={props.id} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
				<View className="toast-header">
					<strong>Minigames</strong>
					<Button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></Button>
				</View>
				<View className="toast-body">
					{props.message}
				</View>
			</View>
		</View>
	);
}
