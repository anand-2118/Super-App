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
    const [news, setNews] = useState();


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

            );
            if (status === 200) {
                setWeather(data.current)
                //console.log(WEATHER_API_KEY)
            }
        }
        catch (error) {
            console.error("Failed to fetch weather data", error);
            console.log(WEATHER_API_KEY)
        }
    };
    const fetchNewsData = async () => {
        try {
            const { data, status } = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
            );

            setNews(data.articles[0])
            console.log(data)

        }
        catch (error) {
            console.error("Failed to fetch news data", error);
        }
    };

    const formatDate = (date) => {
        if (date) {
            const formattedDate = new Date(news.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",

            })

            const formattedTime = new Date(news.publishedAt).toLocaleTimeString("en-US", {

                hour: "numeric",
                minute: "numeric",
                hour12: true
            })

            return `${formattedDate} ${formattedTime}`;

        }else{
            const formattedDate = new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",

            })

            const formattedTime = new Date().toLocaleTimeString("en-US", {

                hour: "numeric",
                minute: "numeric",
                hour12: true
            })

            return `${formattedDate} ${formattedTime}`;
        }
    }

    useEffect(() => {

        if (weather) {
           // const { condition, humidity, temp_c, gust_kph, wind_kph } = weather;

           // console.log(condition.text, humidity, temp_c, gust_kph, wind_kph)
           console.log(weather)
        }
        if (news) {
            //console.log(news)
            console.log(news.publishedAt)
            console.log(new Date(news.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",

            }));

            console.log(new Date(news.publishedAt).toLocaleTimeString("en-US", {

                hour: "numeric",
                minute: "numeric",
                hour12: true
            }));


        }

    }, [weather, news])


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
                                {selectedGenres
                                    .filter((genre, index) => index < 4)
                                    .map((genre) => (
                                        <div className={styles.pill}>
                                            {genres[genre].title}
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.weatherWidget}>
                    {weather && (
                        <div className={styles.weatherWidget}>
                            <div className={styles.header}>

                                {formatDate()}
                            </div>
                            <div className={styles.body}>
                                <img src="https://cdn.weatherapi.com/weather/64x64/day/122.png" alt="" />
                                <p>{weather.condition.text}</p>
                                <p> {weather.pressure_mb}</p>
                                <p>{weather.temp_c}°C</p>
                                <p>{weather.gust_kph}</p>
                                <p>{weather.wind_kph}</p>
                            </div>
                        </div>
                    )}
                </div>

            </div>
            <div className={styles.right}>
                {news && (
                    <div className={styles.newsWidget}>
                        <img src={news.urlToImage} alt="" />
                        <h1> {news.title}</h1>
                        <p>{formatDate(news.publishedAt)}</p>
                        <p>{news.description}</p>
                        )
                    </div>
                )}

            </div>
        </div>
    );
}
