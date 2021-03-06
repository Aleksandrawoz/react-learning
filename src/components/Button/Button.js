
import React from 'react';
import styles from './Button.scss';
import propTypes from 'prop-types';
const Button = ({variant = '', ...otherProps}) => (
  <button 
    {...otherProps} 
    className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
  />
);
Button.propTypes = {
  variant:propTypes.node.isRequired,
};
export default Button;
