import screen from "static/images/screen.png";

import styles from "./styles.module.scss";

export const Why = () => {
   return (
      <section className={styles.why}>
         <div className={styles.container}>
            <div className={styles.why__hat}>
               <h3>Why <span>SYNTHETIX</span></h3>
               <img src={screen} alt="" />
            </div>
            <div className={styles.why__content}>
               <div className={styles.why__card}>
                  <h4>Synthetix Assets</h4>
                  <p>Capture the price movements of popular cryptocurrencies, fiat currencies, stocks, commodities and more with zero slippage.</p>
               </div>
               <div className={styles.why__card}>
                  <h4>Stake & Earn</h4>
                  <p>Staking SNX provides collateral for the debt pool and earns weekly rewards that are a combination of protocol fees and inflationary supply.</p>
               </div>
               <div className={styles.why__card}>
                  <h4>Trade Synth</h4>
                  <p>Trade any synths with low to no slippage and deep liquidity in every asset. Available in spot and futures markets.</p>
               </div>
               <div className={styles.why__card}>
                  <h4>Build</h4>
                  <p>With improved composability, we welcome builders to leverage the protocol and bootstrap your community through Synthetix.</p>
               </div>
            </div>
         </div>
      </section>
   );
};