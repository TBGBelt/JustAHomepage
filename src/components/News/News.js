import React from "react";
import styles from "./News.module.css"

function News({newsTitle, newsDate}) {

    return(
        <div className={styles["news-main"]}>
            <p className={styles["news-main__title"]}>{newsTitle}</p>
            <p className={styles["news-main__date"]}>{newsDate}</p>
        </div>
    )
}

export default News;