import React from 'react';
import styles from './Hero.scss';


const Hero = () => (
      <header className={styles.component}>
        <h2 className={styles.title}>THINGS TO DO</h2>
        <img className={styles.image} src='https://images.pexels.com/photos/1111372/pexels-photo-1111372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'></img>
      </header>
    );

export default Hero;