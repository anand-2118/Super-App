import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import UserWidget from "../../components/userWidget/UserWidget";
import NotesWidget from "../../components/notesWidget/NotesWidget";
import CountDownWidget from "../../components/countDownWidget/CountDownWidget";
import WeatherWidget from "../../components/weatherWidget/WeatherWidget";
import TimerWidget from "../../components/timerWidget/TimerWidget";
import PromotionPage from "../promotion/PromotionPage";
import { useNavigate } from "react-router-dom";
import { fetchWeatherData } from "../../apis/Weather";
import { fetchNewsData } from "../../apis/News";


import NewsWidget from "../../components/newsWidget/NewsWidget";


function Dashboard() {
	const [user, setUser] = useState();
	const [selectedGenres, setSelectedGenres] = useState();
	const [weather, setWeather] = useState();
	const [news, setNews] = useState(null);


	const navigate = useNavigate();


	useEffect(() => {
		setSelectedGenres(JSON.parse(localStorage.getItem("selectedGenres")));
		setUser(JSON.parse(localStorage.getItem("currentUser")));
		fetchWeatherData().then((data) => {
			setWeather(data);
		});
		fetchNewsData().then((data) => {
			setNews(data);
		});
	}, []);

	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<div className={styles.UserWidget}>
					{user && selectedGenres && (
						<UserWidget
							user={user}
							selectedGenres={selectedGenres}
							type={"small"}
						/>
					)}
				</div>
				<div className={styles.WeatherWidget}>
				{weather && <WeatherWidget weather={weather} />}
				</div>
				<div className={styles.TimerWidget}>
					<CountDownWidget />
				</div>
				<div className={styles.NotesWidget}>
					<NotesWidget />
				</div>
				<div className={styles.NewsWidget}>{news && <NewsWidget news={news} />}</div>		
					</div>
					<div>
					<button className={styles.button} 
				onClick={()=>navigate("/promotion")}>
				Next Page
				</button>	
					</div>
		</div>
	);
}

export default Dashboard;