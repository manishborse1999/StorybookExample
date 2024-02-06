import React from 'react';
import PropTypes from 'prop-types';
import styles from './Typography.module.css'; // Import your CSS file

export const Typography = ({ variant, children }) => {
  const variantClassName = variant=='heading'?styles.heading:variant=='subheading'?styles.subheading:variant=='caption'?styles.caption: styles.body ;

  return <div className={`${styles.typography} ${variantClassName}`}>{children}</div>;
};

Typography.propTypes = {
  variant: PropTypes.oneOf(['heading', 'subheading', 'body', 'caption']),
  children: PropTypes.node.isRequired,
};