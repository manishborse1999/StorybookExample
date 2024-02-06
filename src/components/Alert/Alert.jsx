import React from 'react';
import styles from './Alert.module.css';

export const Alert = ({ type, message }) => {
    return (
        <div className={`${styles.alert} ${styles[type]}`}>
            <span className={styles.icon}>!</span>
            <p>{message}</p>
        </div>
    );
};