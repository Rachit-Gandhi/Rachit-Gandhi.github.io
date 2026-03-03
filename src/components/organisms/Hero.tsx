import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.helloWrap}>
          <svg viewBox="0 0 600 200" className={styles.helloSvg}>
            <defs>
              <linearGradient id="helloGradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="50%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="var(--secondary)" />
              </linearGradient>
              <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
            <g filter="url(#gooey)">
              <text x="30" y="130" className={styles.helloText}>
                Hello
              </text>
            </g>
          </svg>
        </div>
        <div className={styles.sub}>Apple-style fluid hello attempt (can swap with a hero banner).</div>
      </div>
    </section>
  );
}
