import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.copyright}>
                2015 © Copyright - Foundation theme by <span>Stylemixthemes</span>
            </div>
            <div className={styles.navigation}>
                    <a href='#'> Services </a>
                    <a href='#'> Our Works </a>
                    <a href='#'> News & Events </a>
                    <a href='#'> Work with us </a>
                    <a href='#'> F.A.Q </a>
                    <a href='#'> Contact us </a>
                    <a href='#'> Shop </a>
            </div>
        </div>
    );
};

export default Footer;