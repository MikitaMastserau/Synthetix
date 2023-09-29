import map from "static/images/map.png";

import styles from "./styles.module.scss";

export const Example = () => {
   return (
      <section className={styles.example}>
         <div className={styles.container}>
            <div className={styles.example__map}>
               <img src={map} alt="" />
               <div className={styles.example__price}>
                  <p>TOTAL VALUE STAKED</p>
                  <p>$546,174,481</p>
               </div>
            </div>
         </div>
      </section>
   );
};