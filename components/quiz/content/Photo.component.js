import React from 'react';
import { View, Image } from 'react-native';

import Style from "../../../style/quiz.style";

export default function Photo(props) {

	const displayPhoto = props.photo ? props.photo.url : "https://via.placeholder.com/300";

	return (
		<View>
			<Image
				style={Style.img}
				source={{
					uri: displayPhoto,
				}}
			/>
		</View>
	);
}
