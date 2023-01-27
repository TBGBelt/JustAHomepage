import React from "react";
import styles from "./Header.module.css"
import logo from "../../assets/svg/logo.svg"
import search from "../../assets/svg/search.svg"
import facebook from "../../assets/svg/fb.svg"
import twitter from "../../assets/svg/twitter.svg"
import linkedin from "../../assets/svg/linkedin.svg"
import youtube from "../../assets/svg/youtube.svg"
import MenuItem from "../MenuItem/MenuItem";
import {NavLink} from "react-router-dom";

function Header() {

    return (
        <div className={styles["header__inner-container"]}>
            <div className={styles["header__logo"]}>
                <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
            </div>
            <div className={styles["header__menu-items-outer"]}>
                <div className={styles["header__menu-items"]}>
                    <MenuItem
                        itemTitle="General"
                    />

                    <MenuItem
                        itemTitle="Communities"
                    />

                    <MenuItem
                        itemTitle="unlock_"
                    />

                    <MenuItem
                        itemTitle="news"
                    />

                    <MenuItem
                        itemTitle="events"
                    />

                    <MenuItem
                        itemTitle="contact"
                    />
                </div>


                <div className={styles["header__search-image"]}>
                    <NavLink to="/"><img src={search} alt="search"/></NavLink>
                </div>
            </div>
            <div className={styles["header__social-media"]}>
                <img src={facebook} alt="facebook"/>
                <img src={twitter} alt="twitter"/>
                <img src={linkedin} alt="linkedin"/>
                <img src={youtube} alt="youtube"/>
            </div>
        </div>
    );
}

export default Header;