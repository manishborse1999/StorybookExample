// Card.js
import React from 'react';
import styles from './Card.module.css';
import { Button } from '../Button/index.jsx';

export const Card = ({ title, imageUrl, description, firstButtonTitle, secondButtonTitle }) => {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={imageUrl} alt={title} />
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDescription}>{description}</p>
                <div className={styles.alignButton}>
                    <Button>{firstButtonTitle}</Button>
                    <Button style={{ margin: '2px' }}>{secondButtonTitle}</Button>
                </div>
            </div>
        </div>
    );
};