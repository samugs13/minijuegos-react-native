import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Author(props) {

	const author = props.author;
	const displayName = author ? author.profileName || author.username || "Unknown" : "Unknown";
	const displayPhoto = author ? author.photo.url || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y" : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y";

	return (
		<div className="container row">
			<div className="col-2">
				<img src={displayPhoto} className="profile-photo" alt="profile" />
			</div>
			<div className="col d-flex align-items-end text-start">
				<p>Author</p>
			</div>
		</div>
	);
}
