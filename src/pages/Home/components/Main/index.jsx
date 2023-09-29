import circle from "static/images/circle.svg";

import styles from "./styles.module.scss";

export const Main = () => {
   return (
      <main className={styles.main}>
         <div className={styles.container}>
            <h1>The Derivаtives <span>Liquidity Protocol</span></h1>
            <div className={styles.main__text}>
               <p><strong>Synthetix</strong> is a new financial primitive enabling the creation of synthetic assets, offering unique derivatives and exposure to <span>real-world assets on the blockchain.</span></p>
               <img src={circle} alt="" />
            </div>
         </div>
      </main>
   );
};