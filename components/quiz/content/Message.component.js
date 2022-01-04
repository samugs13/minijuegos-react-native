import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Message(props) {

	return (
		<div className="position-fixed top-0 end-0 p-3">
			<div id={props.id} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
				<div className="toast-header">
					<strong>Minigames</strong>
					<button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
				</div>
				<div className="toast-body">
					{props.message}
				</div>
			</div>
		</div>
	);
}
