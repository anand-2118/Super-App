import React from "react";
import styles1 from "./UserWidget.module.css";
import styles2 from "./UserWidgetSmall.module.css";
import userAvatar from "../../Assets/image 14.png";
import { genres } from "../../Assets/data/genres";

export default function UserWidget({ user, selectedGenres, type }) {
	let styles;
	if (type === "small") {
		styles = styles2;
	} else {
		styles = styles1;
	}

	const { name, email, username } = user;
	return (
		<div className={styles.userWidget}>
			<img src={userAvatar} alt="user avatar" />
			<div>
				<h3> {name}</h3>
				<h3>{email}</h3>
				<h1>{username}</h1>
				{selectedGenres && (
					<div className={styles.genreGrid}>
						{selectedGenres
							?.filter((_genre, index) => index < 4)
							?.map((genre,index) => (
								<div key={index} className={styles.pill}>{genres[genre].title}</div>
							))}
					</div>
				)}
			</div>
		</div>
	);
}

