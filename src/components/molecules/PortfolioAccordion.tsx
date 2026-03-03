import { useState } from "react";
import styles from "./PortfolioAccordion.module.css";

export type PortfolioItem = {
  title: string;
  description: string;
  images?: string[];
};

type PortfolioAccordionProps = {
  title: string;
  items: PortfolioItem[];
};

export default function PortfolioAccordion({ title, items }: PortfolioAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.wrap}>
      <h3 className={styles.heading}>{title}</h3>
      <div className={styles.list}>
        {items.map((item, idx) => (
          <div key={item.title} className={styles.item}>
            <button
              className={styles.itemHeader}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span>{item.title}</span>
              <span className={styles.chev}>{openIndex === idx ? "–" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div className={styles.itemBody}>
                <p>{item.description}</p>
                <div className={styles.carousel}>
                  <div className={styles.track}>
                    {(item.images?.length ? item.images : ["", "", ""]).map((img, i) => (
                      <div className={styles.slide} key={i}>
                        {img ? <img src={img} alt="" /> : "Image"}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
