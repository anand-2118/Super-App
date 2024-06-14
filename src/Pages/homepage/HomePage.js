import React, { useState, useEffect } from 'react';
import styles from './Homepage.module.css';
import UserAvatar from '../../Assets/image 14.png';
import axios from 'axios';

export default function HomePage() {
    const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || {});
    const [selectedGenres, setSelectedGenres] = useState(JSON.parse(localStorage.getItem("selectedGenres")) || []);
    const [weather, setWeather] = useState()
    const [news,setNews] = useState();


    const genres = [
        { title: "Action" },
        { title: "Drama" },
        { title: "Romance" },
        { title: "Thriller" },
        { title: "Western" },
        { title: "Horror" },
        { title: "Fantasy" },
        { title: "Music" },
        { title: "Fiction" },
    ];

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("currentUser")));
        // console.log(user);
        setSelectedGenres(JSON.parse(localStorage.getItem("selectedGenres")));
        // console.log(selectedGenres)
        fetchWeatherData();
        fetchNewsData();
    }, []);

    const fetchWeatherData = async () => {
        try {
            const { data, status } = await axios.get(
                `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=delhi`
                //"https://api.weatherapi.com/v1/current.json?key=f0e14dc859824baa96185859241106&q=delhi"
                
            );
            if (status === 200) {
                setWeather(data.current)
            }
        }
        catch (error) {
            console.error("Failed to fetch weather data", error);
        }
    };
    const fetchNewsData = async () => {
        try {
            const { data,status } = await axios.get(
                 `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
               //"https://newsapi.org/v2/top-headlines?country=us&apiKey=1e03948c10694d84af3eb76ec1199b84"
            );
            
                setNews(data.articles)
               console.log(status)
            
        }
        catch (error) {
            console.error("Failed to fetch news data", error);
        }
    };

    useEffect(() => {
        if (weather) {
            const { condition, humidity, temp_c, gust_kph, wind_kph } = weather;

            console.log(condition.text, humidity, temp_c, gust_kph, wind_kph)
        }
        if(news){
            console.log(news)
        }
        
    }, [weather,news])


    return (
        <div className={styles.page}>
            <div className={styles.left}>
                <div className={styles.userWidget}>
                    <img src={UserAvatar} alt="user avatar" />
                    <div className={styles.userDetails}>
                        <h3>{user.name}</h3>
                        <h3>{user.email}</h3>
                        <h1>{user.username}</h1>
                        {selectedGenres.length > 0 && (
                            <div className={styles.genreGrid}>
                                {selectedGenres.map((item, index) => (
                                    <div className={styles.pill} key={index}>
                                        {genres[item].title}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.weatherWidget}>
                {weather && (
                    <div className={styles.weatherWidget}>
                        <h3>Weather in Delhi</h3>
                        <p>{weather.condition.text}</p>
                        <p>{weather.temp_c}°C</p>
                        <p>pressure: {weather.pressure_mb}</p>
                        <p>{weather.gust_kph}</p>
                        <p>{weather.wind_kph}</p>
                    </div>
                )}
                </div>

            </div>
            <div className={styles.right}>
            {news && (
                    <div className={styles.newsWidget}>
                        <h3>Top News Headlines</h3>
                        {news.map((article, index) => (
                            <div key={index} className={styles.newsArticle}>
                                <h4>{article.title}</h4>
                                <p>By {article.author || "Unknown"}</p>
                                <p>{article.description}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                            </div>
                        ))}
                    </div>
                )}
                
            </div>
        </div>
    );
}
