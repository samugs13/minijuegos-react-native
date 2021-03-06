import React from 'react';
import { View } from 'react-native';

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
					<Previous click={props.previousClick} disabled={props.disabled.prev} />
					<Next click={props.nextClick} disabled={props.disabled.next} />
					<Replay click={props.reClick}/>
				</View>
			) : (
				<View style={Style.actionBar}>
					<Previous click={props.previousClick} disabled={props.disabled.prev} />
					<Next click={props.nextClick} disabled={props.disabled.next} />
					<Reset click={props.reClick}/>
					<Submit click={props.submitClick} />
				</View>
			)}
		</View>
	);
}
