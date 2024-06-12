import React, { useState, useEffect } from 'react';
import styles from './Hompage.module.css';
import UserAvatar from '../../Assets/image 14.png';
import axios from 'axios';

export default function HomePage() {
    const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const NEWS_API_KEY = process.env.REACT_APP__NEWS_API_KEY;
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || {});
    const [selectedGenres, setSelectedGenres] = useState(JSON.parse(localStorage.getItem("selectedGenres")) || []);
    const [weather, setWeather] = useState(null);
    const [news, setNews] = useState(null);

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
        setUser(JSON.parse(localStorage.getItem("currentUser")) || {});
        setSelectedGenres(JSON.parse(localStorage.getItem("selectedGenres")) || []);
    }, []);

    useEffect(() => {
        fetchWeatherData();
        console.log(fetchNewsData)
        fetchNewsData();
        console.log(fetchNewsData)
    }, []);

    const fetchWeatherData = async () => {
        try {
            const { data, status } = await axios.get(
                `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=auto:ip`
            );
            if (status === 200) {
                setWeather(data.current);
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const fetchNewsData = async () => {
        try {
            const { data, status } = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
            );
            if (status === 200) {
                setNews(data);
            }
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };

    useEffect(() => {
        console.log(weather);
        console.log(news);
    }, [weather, news]);

    useEffect(() => {
        selectedGenres.forEach((genre) => {
           // console.log(genres[genre]);
        });
        //console.log(user);
    }, [selectedGenres, user]);

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
                        <div>
                            <p>{weather.condition.text}</p>
                            <p>{weather.temp_c}°C</p>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.newsWidget}>
                    {news && news.articles.map((article, index) => (
                        <div key={index}>
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
