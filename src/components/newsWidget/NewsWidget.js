import React from "react";
import styles from "./NewsWidget.module.css";
import { fetchNewsData } from "../../apis/News";


export default function NewsWidget({ news }) {
	//console.log("news",news);
	const formatDate = (date) => {
		if (date) {
			const formattedDate = new Date(date).toLocaleDateString(
				"en-US",
				{
					year: "numeric",
					month: "long",
					day: "numeric",
				}
			);
			const formattedTime = new Date(date).toLocaleTimeString(
				"en-US",
				{
					hour: "numeric",
					minute: "numeric",
					hour12: true,
				}
			);

			return `${formattedDate} ${formattedTime}`;
		} else {
			const formattedDate = new Date().toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});
			const formattedTime = new Date().toLocaleTimeString("en-US", {
				hour: "numeric",
				minute: "numeric",
				hour12: true,
			});

			return `${formattedDate} ${formattedTime}`;
		}
	};

	return (
		<div className={styles.newsWidget}>
			{news.map((item, index) => (
                <div key={index} className={styles.newsWidget}>
                    <div className={styles.header}>
                        <img src={item.urlToImage}  />
                        <div className={styles.headerText}>
                            <h3>{item.title?.split?.("-")?.[0]}</h3>
                            <h5>{formatDate(item.publishedAt)}</h5>
                        </div>
                    </div>
                    <div className={styles.footer}>{item.description}</div>
                </div>
            ))}
		</div>
	);
}

