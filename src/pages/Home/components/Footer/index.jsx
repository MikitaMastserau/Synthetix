import { useCallback } from "react";

import mainLogo from "static/icons/mainLogo.png";
import githubIcon from "static/icons/githubIcon.svg";
import linkedinIcon from "static/icons/linkedinIcon.svg";
import telegramIcon from "static/icons/telegramIcon.svg";
import facebook from "static/icons/facebook.svg";
import twitter from "static/icons/twitter.svg";
import insta from "static/icons/insta.svg";

import styles from "./styles.module.scss";

export const Footer = () => {
   const scrollTop = useCallback(() => {
      window.scroll({
         behavior: "smooth",
         top: 0,
      });
   }, []);

   return (
      <footer className={styles.footer} id="footer">
         <div className={styles.container}>
            <button className={styles.footer__logo} onClick={() => scrollTop()}><img src={mainLogo} alt="" /></button>
            <div className={styles.footer__links}>
               <a href="https://github.com/MikitaMastserau" target="_blanc"><img src={githubIcon} alt="" /></a>
               <a href="https://www.linkedin.com/in/mikita-mastserau/" target="_blanc"><img src={linkedinIcon} alt="" /></a>
               <a href="https://t.me/MM_Mikita" target="_blanc"><img src={telegramIcon} alt="" /></a>
               <a href="#footer"><img src={facebook} alt="" /></a>
               <a href="#footer"><img src={twitter} alt="" /></a>
               <a href="#footer"><img src={insta} alt="" /></a>
            </div>
            <p className={styles.footer__text}>All Rights Reserved. 2023</p>
         </div>
      </footer>
   );
};