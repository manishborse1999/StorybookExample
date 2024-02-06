// Card.js
import React from 'react';
import styles from './Card.module.css';
import PropTypes from 'prop-types';
import { Button } from '../Button/index.jsx';

export const Card = ({ title = "Card Title", imageUrl, description = "Card Description", firstButtonTitle = "Learn More", secondButtonTitle = "Share", onButtonOneClick, onButtonTwoClick }) => {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={imageUrl} alt={title} />
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDescription}>{description}</p>
                <div className={styles.alignButton}>
                    <Button onClick={onButtonOneClick}>{firstButtonTitle}</Button>
                    <Button onClick={onButtonTwoClick}>{secondButtonTitle}</Button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    /**
     * Title of card
     */
    title: PropTypes.string,
    /**
     * ImageUrl of card
     */
    imageUrl: PropTypes.string,
    /**
     * Description of card
     */
    description: PropTypes.string,
    /**
     * firstButtonTitle button title
     */
    firstButtonTitle: PropTypes.string,
    /**
     * secondButtonTitle button title
     */
    secondButtonTitle: PropTypes.string,
};

Card.defaultProps = {
    title: 'Card Title',
    imageUrl: null,
    description: 'Card Description',
    firstButtonTitle: 'Learn More',
    secondButtonTitle: 'Share'
};