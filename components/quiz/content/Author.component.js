import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Style from "../../../style/quiz.style";

export default function Author(props) {

	const author = props.author;
	const displayName = author ? author.profileName || author.username || "Unknown" : "Unknown";
	const displayPhoto = author ? author.photo.url || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y" : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y";

	return (
		<View style={Style.container}>
			<View className="col-2">
				<Image
					style={Style.profileImg}
					source={{
						uri: displayPhoto,
					}}
				/>
			</View>
			<View className="col d-flex align-items-end text-start">
				<Text style={Style.author}>{`Author: ${displayName}`}</Text>
			</View>
		</View>
	);
}
