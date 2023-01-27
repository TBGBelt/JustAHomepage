import React from "react";
import calender from "../../assets/svg/calendar.svg"
import styles from "./Events.module.css"

function Events({calenderNumber, eventTitle, eventDate}) {

    return(
        <div className={styles["event-item__outer-container"]}>
            <img className={styles["event-item__calender-image"]} src={calender}/>
            <p className={styles["event-item__calender-number"]}>{calenderNumber}</p>
            <div className={styles["event-item__title-date-container"]}>
            <p className={styles["event-item__title"]}>{eventTitle}</p>
            <p className={styles["event-item__date"]}>{eventDate}</p>
            </div>
        </div>
    )

}

export default Events;