// Header.js
import React from 'react';
import styles from './Header.module.css';
import { Button } from '../Button/index.jsx';


export const Header = ({ title, headerBgColor }) => {
    const HeaderBgColor = headerBgColor == "secondary" ? styles.secondary : headerBgColor == "error" ? styles.error : headerBgColor == "transparent" ? styles.transparent : headerBgColor == "warning" ? styles.warning : styles.primaryButton;

    return (
        <header className={`${styles.header} ${HeaderBgColor}`}>
            <div>
                <h1>{title}</h1>
            </div>
            <div className={styles.buttonContainer}>
                <Button buttonBgColor={'transparent'} styles={{ marginRight: '10px' }}>Home</Button>
                <Button buttonBgColor={'transparent'}>Sign Up</Button>
            </div>
        </header>
    );
};