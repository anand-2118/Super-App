import React, { useState } from 'react'
import actionBG from "../../Assets/action.png"
import styles from './Genre.module.css'

export default function Genre() {
	const [genres, setGenres] = useState([
		{
			title: "Action",
			bgImage: actionBG,
		},
		{
			title: "Drama",
			bgImage: actionBG,
		},
		{
			title: "Romance",
			bgImage: actionBG,
		},
		{
			title: "Thriller",
			bgImage: actionBG,
		},
		{
			title: "Western",
			bgImage: actionBG,
		},
		{
			title: "Horror",
			bgImage: actionBG,
		},
		{
			title: "Fantasy",
			bgImage: actionBG,
		},
		{
			title: "Music",
			bgImage: actionBG,
		},
		{
			title: "Fiction",
			bgImage: actionBG,
		},

	]);
	const [selectedGenres, setSelectedGenres] = useState([1, 3, 5]);

	const bgColors =  [
		"#ff5208",
		"#d7a4ff",
		"#148a08",
		"#84c2ff",
		"#902500",
		"#ff4ade",
		"#e61e32",
		"#6cd061"
	]
	const removeGenres = (index) => {
		//console.log(index);
		const newGenres = selectedGenres.filter((item) => item !== index);
		//console.log(newGenres)
		setSelectedGenres(newGenres)
	};

	const selectGenre = (index) => {
		setSelectedGenres([...selectedGenres, index]);
	}

	return (
		<div className={styles.page}>
			<div className={styles.left}>
				<h2>Super App</h2>
				<h1>Choose Your Entertainment Category</h1>
				<div className={styles.selected}>
					{selectedGenres.map((item,index) => {
						return <div key={item} className={styles.selectedGenre} style={{backgroundColor:bgColors[index]}}>
							{genres[item].title}
							<img src={genres[item].bgImage} alt=" " />
							<button onClick={() => removeGenres(item)}>X</button>

						</div>
					})}
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.genreGrid}>
					{genres.map((genre, index) => {
						return <div
							key={index}
							className={styles.genreCard}
							onClick={() => selectGenre(index)}
							style={{backgroundColor:bgColors[index]}}
						>
							{genre.title}
							<img src={genre.bgImage} alt="" />
						</div>
					})}
				</div>
			</div>
		</div>
	)
}
