import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ children, backgroundColor,onClick,size, ...rest }) => {
    const buttonClassName = backgroundColor == 'secondary' ? styles.secondary : backgroundColor == 'success' ? styles.success:backgroundColor == 'danger' ? styles.danger:backgroundColor == 'transparent' ? styles.transparent : styles.primary;
    const sizeClassName = size=='small'?styles.small:size=='large'?styles.large:styles.medium;
    return (
        <button className={`${styles.button} ${buttonClassName} ${sizeClassName}`} {...rest} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    children: PropTypes.string,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };
  
  Button.defaultProps = {
    backgroundColor: 'primary',
    children: null,
    size: 'medium',
    onClick: undefined,
  };