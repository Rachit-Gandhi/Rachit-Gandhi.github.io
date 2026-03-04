import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.asciiWrap}>
          <pre className={styles.asciiArt}>
{`   (  )   (   )  )
    ) (   )  (  (
    ( )  (    ) )
     __________
    |          |\
    |   ♥♥     | \
    |  ♥  ♥    |  \
    |   ♥♥     |  |
    |          |  |
    |__________| / 
     \________/  
       |    |
     __|____|__
    /__________\`}
          </pre>
          <div className={styles.steam}>
            <span>~</span>
            <span>~</span>
            <span>~</span>
          </div>
        </div>
        <div className={styles.sub}>Cappuccino moment — ASCII + animated steam.</div>
      </div>
    </section>
  );
}
