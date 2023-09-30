import circle from "static/images/circle.svg";
import arrow from "static/images/arrow.svg";

import styles from "./styles.module.scss";

export const Main = () => {
   return (
      <main className={styles.main}>
         <div className={styles.container}>
            <h1>The Derivаtives <span>Liquidity Protocol</span></h1>
            <div className={styles.main__text}>
               <p><strong>Synthetix</strong> is a new financial primitive enabling the creation of synthetic assets, offering unique derivatives and exposure to <span>real-world assets on the blockchain.</span></p>
               <div className={styles.main__image}>
                  <img src={circle} alt="" />
                  <img src={arrow} alt="" />
               </div>
            </div>
         </div>
      </main>
   );
};