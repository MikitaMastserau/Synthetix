import { useState } from "react";

import mainLogo from "static/icons/mainLogo.png";
import menu from "static/icons/menu.svg";
import close from "static/icons/close.svg";

import styles from "./styles.module.scss";

export const Header = () => {
   const [open, setOpen] = useState(false);

   return (
      <header className={styles.header} id="header">
         <div className={styles.container}>
            <button className={styles.header__logo}><img src={mainLogo} alt="" /></button>
            <div className={open ? [styles.header__menu, styles.header__activeMenu].join(" ") : styles.header__menu}>
               <nav>
                  <a href="#header" onClick={() => setOpen(!open)}>Synths</a>
                  <a href="#header" onClick={() => setOpen(!open)}>Perps</a>
                  <a href="#header" onClick={() => setOpen(!open)}>Governance</a>
                  <a href="#header" onClick={() => setOpen(!open)}>Guides</a>
                  <a href="#header" onClick={() => setOpen(!open)}>Community</a>
               </nav>
               <div className={styles.header__btns}>
                  <button>Stats</button>
                  <button>Staking</button>
               </div>
            </div>
            <div className={styles.header__menuButton} onClick={() => setOpen(!open)}>
               {open ? <img src={close} alt="" /> : <img src={menu} alt="" />}
            </div>
         </div>
      </header>
   );
};