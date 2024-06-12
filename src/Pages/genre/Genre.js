import React, { useState,useEffect } from 'react'
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
	const [selectedGenres, setSelectedGenres] = useState([]);
    
	const [lengthWarning,setLengthWarning] = useState(false);

	useEffect(() => {
		if (selectedGenres.length >= 3) {
			setLengthWarning(false);
		}
		localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
		console.log(localStorage.getItem("selectedGenres"));
	}, [selectedGenres]);
    

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
		if (newGenres.length < 3) {
			setLengthWarning(true); // Show warning if less than 3 categories are selected
		  } else {
			setLengthWarning(false)};
	};

	const selectGenre = (index) => {
		
		if (selectedGenres.includes(index)) {
			setSelectedGenres((prev) => prev.filter((item) => item !== index));
		} else {
			setSelectedGenres((prev) => [...prev, index]);
		}
	}

	const handleNext = () => {
		if(selectedGenres.length+1<3){
			setLengthWarning(true);
		}
		else {
			setLengthWarning(false);
		}
	}

	return (
		<div className={styles.page}>
			<div className={styles.left}>
				<h1 className={styles.leftHeader}>Super app</h1>
					<h2 className={styles.leftSubHeader}>
						Choose your <br /> entertainment <br /> category
					</h2>

				<div className={styles.selected}>
					{selectedGenres.map((item,index) => {
						return <div key={item} className={styles.selectedGenre} style={{backgroundColor:bgColors[index]}}>
							{genres[item].title}
							<button onClick={() => removeGenres(item)}>X</button>

						</div>
					})}
					
				</div>
				{lengthWarning && (
					<div className={styles.warning}>
						 <div> &nbsp;Minimum 3 category required</div>
					</div>
				)}
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
<button className={styles.button} onClick={handleNext}>
					Next Page
				</button>			</div>
		</div>
	)
}
