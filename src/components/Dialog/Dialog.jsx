// Dialog.js

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dialog.module.css';

export const Dialog = ({ isOpen, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div className={styles.backdrop} onClick={onClose}>
                    <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.closeButton} onClick={onClose}>
                            &times;
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

Dialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};