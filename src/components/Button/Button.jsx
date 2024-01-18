// Button.js
import React from 'react';
import styles from './Button.module.css';

export const Button = ({ children, buttonBgColor, ...rest }) => {
    const buttonClassName = buttonBgColor == 'secondary' ? styles.secondaryButton : buttonBgColor == 'transparent' ? styles.transparent : styles.primaryButton;

    return (
        <button className={`${styles.button} ${buttonClassName}`} {...rest}>
            {children}
        </button>
    );
};

