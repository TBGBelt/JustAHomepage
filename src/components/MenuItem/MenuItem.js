import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./MenuItem.module.css"

function MenuItem({itemTitle}) {

    return (
        <div className={styles["menuItem__main"]}>
            <ul >
                <li className={styles["dropdown__menuItems"]} >
                    <NavLink className={styles["dropdown__menuLink"]} to="/">{itemTitle}</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default MenuItem;