import React from 'react'
import styles from '../../styles/Header.module.css'

const Header = () => {

    const today = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = months[today.getMonth()];
    let day = today.getDate();
    let year = today.getFullYear();

    let displayDate = `${month} ${day}, ${year}`

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Welcome</h1>
            <span className={styles.date}>{displayDate}</span>
        </div>
    );
}

export default Header;