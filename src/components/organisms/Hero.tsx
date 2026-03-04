import styles from "./Hero.module.css";

export default function Hero() {
  const art = String.raw`     (  )   (   )  )
      ) (   )  (  (
      ( )  (    ) )
        _____________
       /             \
      /   ♥♥  ♥♥       \
     |   ♥  ♥  ♥  ♥     |
     |    ♥♥  ♥♥        |
     |                 |
      \_______________/
          |       |
         _|_______|_
        /___________\`;

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.asciiWrap}>
          <pre className={styles.asciiArt}>{art}</pre>
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
