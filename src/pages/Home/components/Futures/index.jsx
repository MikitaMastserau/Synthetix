import styles from "./styles.module.scss";

export const Futures = () => {
   return (
      <section className={styles.futures}>
         <div className={styles.container}>
            <div className={styles.futures__hat}>
               <h2>Decentralized <span>Perpetual Futures</span></h2>
               <div>
                  <p>99%</p>
                  <p>Guaranteed safety</p>
               </div>
            </div>
            <div className={styles.futures__text}>
               <h4>Best Price Execution</h4>
               <p>Leveraging the Synthetix debt pool and our innovative liquidity framework, our traders are guaranteed to have some of the best price execution around, with little to no slippage and fills.</p>
               <h4>Lowest Downtime & Liquidation Risk</h4>
               <p>Say goodbye to downtime during periods of high volatility. As an added bonus, our futures contracts remove the risk of cascading liquidations due to forced selloffs.</p>
               <h4>Permissionless & Composable</h4>
               <p>Get all the benefits of DeFi with a fully on-chain permissionless futures trading experience. Looking to build with leveraged perpetual futures contracts? Learn more about how to integrate.</p>
            </div>
         </div>
      </section>
   );
};