// Header.js
import React from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';
import { Button } from '../Button/index.jsx';


export const Header = ({ title="Storybook Header", headerBgColor="primary" }) => {
    const HeaderBgColor = headerBgColor == "secondary" ? styles.secondary : headerBgColor == "error" ? styles.error : headerBgColor == "transparent" ? styles.transparent : headerBgColor == "warning" ? styles.warning : styles.primary;

    return (
        <header className={`${styles.header} ${HeaderBgColor}`}>
            <div>
                <h1>{title}</h1>
            </div>
            <div className={styles.buttonContainer}>
                <Button backgroundColor={'transparent'} style={{marginRight:'10px'}}>Home</Button>
                <Button backgroundColor={'transparent'}>Sign Up</Button>
            </div>
        </header>
    );
};

Header.propTypes = {
    /**
     * Title of header
     */
    title: PropTypes.string,
    /**
     * Header background color
     */
    headerBgColor: PropTypes.string,
  };
  
  Header.defaultProps = {
    title: 'Storybook Header',
    headerBgColor:'transparent'
  };