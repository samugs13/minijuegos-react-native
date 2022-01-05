import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Style from "../../../style/quiz.style";

import Next from '../actions/Next.component';
import Previous from '../actions/Previous.component';
import Submit from '../actions/Submit.component';
import Replay from '../actions/Replay.component';
import Reset from '../actions/Reset.component';


export default function Actionbar(props) {
	return (
		<View>
			{props.finished ? (
				<View style={Style.actionBar}>
					<Previous click={props.previousClick} />
					<Next click={props.nextClick} />
					<Replay click={props.reClick}/>
				</View>
			) : (
				<View style={Style.actionBar}>
					<Previous click={props.previousClick} />
					<Next click={props.nextClick} />
					<Reset click={props.reClick}/>
					<Submit click={props.submitClick} />
				</View>
			)}
		</View>
	);
}
