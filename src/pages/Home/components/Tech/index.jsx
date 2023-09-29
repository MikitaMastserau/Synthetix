import card1 from "static/images/card1.png";
import card2 from "static/images/card2.png";
import card3 from "static/images/card3.png";

import styles from "./styles.module.scss";

export const Tech = () => {
   return (
      <section className={styles.tech}>
         <div className={styles.container}>
            <div className={styles.tech__hat}>
               <h3>POWERED BY <span>SYNTHETIX</span></h3>
               <p>Learn more about the platforms built on top of the <span>Synthetix protocol. Synthetix powers</span> decentralized perpetual futures, options markets, deal coordination markets, and more.</p>
            </div>
            <div className={styles.tech__content}>
               <div className={styles.tech__card}>
                  <img src={card1} alt="" />
                  <h4>Kwenta</h4>
                  <p>Trade with up to 1ox leverage and simulated liquidity for the best price fills. Coming soon.</p>
               </div>
               <div className={styles.tech__card}>
                  <img src={card2} alt="" />
                  <h4>Lyra</h4>
                  <p>The first completely decentralized options protocol.</p>
               </div>
               <div className={styles.tech__card}>
                  <img src={card3} alt="" />
                  <h4>Thales</h4>
                  <p>A Parimutuel Markets protocol for trading on price action, sports, and other events.</p>
               </div>
            </div>
         </div>
      </section>
   );
};