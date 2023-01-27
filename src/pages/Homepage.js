import React from "react";
import styles from "./Homepage.module.css"
import portret1 from "../assets/imgs/577dc2f1-86a1-7535-9967-4669c918542b.jpg"
import portret2 from "../assets/imgs/foto-hanemaaijer-280x280-crop-42-45-q80.jpg"
import portret3 from "../assets/imgs/hogendoorn-pancras-web-280x280-crop-50-50-q80.jpg"
import Card from "../components/Card/Card";
import Events from "../components/Events/Events";
import News from "../components/News/News";


function Homepage() {

    return (
        <>
            <div className={styles["homepage__outer-container"]}>
                <div className={styles["homepage__inner-container"]}>
                    <div className={styles["homepage__main-title"]}>
                        <h1>Risus Fringilla Ligula</h1>
                    </div>
                    <div className={styles["homepage__sub-title"]}>
                        <h2>Donec sed odio dui. </h2>
                        <h2>Integer posuere erat.</h2>
                    </div>
                    <div className={styles["homepage__scroll"]}>
                        <p>scroll to explore</p>
                    </div>
                </div>

                <div>
                    <h4 className={styles["homepage__cards-container-title"]}>what others say</h4>
                    <div className={styles["homepage__cards-container"]}>
                        <div className={styles["homepage__cards-component"]}>
                            <Card
                                picture={portret1}
                                quote="Amet Sollicitudin Dolor Aenean"
                                name="Joeri van den Steenhoven"
                                occuptation="Venenatis Pellentesque Tellus Quam"
                            />
                        </div>
                        <div className={styles["homepage__cards-component"]}>
                            <Card
                                picture={portret2}
                                quote="Amet Sollicitudin Dolor Aenean"
                                name="Roeland Hanemaaijer"
                                occuptation="Venenatis Pellentesque Tellus Quam"
                            />
                        </div>
                        <div className={styles["homepage__cards-component"]}>
                            <Card
                                picture={portret3}
                                quote="Amet Sollicitudin Dolor Aenean"
                                name="Prof.dr. Pancras C.W. Hogendoorn"
                                occuptation="Venenatis Pellentesque Tellus Quam"
                            />
                        </div>
                    </div>
                </div>

                <div className={styles["homepage__news-events-outer-container"]}>
                    <h4 className={styles["homepage__news-events-title"]}>news and events</h4>
                    <div className={styles["homepage__news-events-container"]}>
                        <div className={styles["homepage__news-container"]}>
                            <News
                                newsTitle="Tristique Adipiscing Consectetur"
                                newsDate="Feb 15, 2022"
                            />
                            <News
                                newsTitle="Tristique Adipiscing Consectetur"
                                newsDate="Feb 9, 2022"
                            />
                            <News
                                newsTitle="Tristique Adipiscing Consectetur"
                                newsDate="Feb 8, 2022"
                            />
                            <p>more news</p>
                        </div>
                        <div className={styles["homepage__events-container"]}>
                            <Events
                                calenderNumber="01"
                                eventTitle="European City Of Science"
                                eventDate="Saturday, January 01"
                            />
                            <Events
                                calenderNumber="17"
                                eventTitle="Human Capital Intervisie"
                                eventDate="Thursday, February 17"
                            />
                            <Events
                                calenderNumber="22"
                                eventTitle="Tech Talk: 3D-laboratory in medicine"
                                eventDate="Tuesday, February 22"
                            />
                            <p>more events</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;