import React from "react";
import styles from "./Card.module.css"
import openquote from "../../assets/svg/quote-open.svg"
import closequote from "../../assets/svg/quote-close.svg"

function Card({picture, quote, name, occuptation}) {

    return (
        <>
            <card className={styles["person-card"]}>
                <div >
                    <img className={styles["person-card__photo"]} src={picture}/>
                </div>
                <div className={styles["person-card__quote"]}>
                    <img src={openquote}/>
                    <h2>{quote}</h2>
                    <img src={closequote}/>
                </div>
                <div className={styles["person-card__name"]}>
                    <p>{name}</p>
                </div>
                <div className={styles["person-card__occuptation"]}>
                    <p>{occuptation}</p>
                </div>
            </card>
        </>
    )
}

export default Card;