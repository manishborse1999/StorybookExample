// Footer.js

import React from 'react';
import styles from './Footer.module.css';  // Import the associated CSS file

export const Footer = ({ BgColor, year, companyName }) => {
    const footerBgColor = BgColor == "secondary" ? styles.secondary : BgColor == "error" ? styles.error : BgColor == "transparent" ? styles.transparent : BgColor == "warning" ? styles.warning : styles.primary;
    return (
        <footer className={`${styles.footerContainer} ${footerBgColor}`}>
            <div className={styles.footerContent}>
                <p>&copy; {year} {companyName} All rights reserved.</p>
                <div className={styles.socialLinks}>
                    <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    {/* Add more social media links as needed */}
                </div>
            </div>
        </footer>
    );
};