import React, { useState, useEffect } from "react";
import styles from "./Homepage.module.css";
import { fetchWeatherData } from "../../apis/Weather";
import { fetchNewsData } from "../../apis/News";
import UserWidget from "../../components/userWidget/UserWidget";
import WeatherWidget from "../../components/weatherWidget/WeatherWidget";
import NewsWidget from "../../components/newsWidget/NewsWidget";
import { useNavigate } from "react-router-dom";


export default function HomePage() {
	const [user, setUser] = useState();
	const [selectedGenres, setSelectedGenres] = useState();
	const [weather, setWeather] = useState();
	const [news, setNews] = useState(null);
	const navigate = useNavigate();


	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("currentUser")));
		setSelectedGenres(JSON.parse(localStorage.getItem("selectedGenres")));
		fetchWeatherData().then((data) => {
			setWeather(data);
		});
		fetchNewsData().then((data) => {
			setNews(data);
		});
	}, []);

	return (
		<div className={styles.page}>
			<div className={styles.left}>
				{user && <UserWidget user={user} selectedGenres={selectedGenres} />}
				{weather && <WeatherWidget weather={weather} />}
			</div>
			<div className={styles.right}>{news && <NewsWidget news={news} />}</div>
			<button className={styles.button} 
				onClick={()=>navigate("/dashboard")}>
				Next Page
				</button>
		</div>
		
	);
}

