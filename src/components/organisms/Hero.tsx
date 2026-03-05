import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { posts as blogPosts } from "./BlogList";
import styles from "./Hero.module.css";

type RecentItem = {
  type: "Blog" | "Project";
  title: string;
  date: string;
  href: string;
};

export default function Hero() {
  // A broad, side-view cappuccino bowl
  const steam = String.raw`
                                                                      ░░                                                      
                                                                ████                                                      
                                                                ██░░                                                      
                                                                  ██                                                      
                                                                    ██▒▒                                                  
                                                                      ██                                                  
                                ▒▒                                    ░░██                                                
                                  ▒▒▒▒▒▒                                ██                                                
                                  ░░  ████              ▒▒              ██                                                
                                          ████          ████            ██                                                
                                            ████          ████          ██                                                
                                              ██            ██        ████                                                
                                            ████            ██        ██                                                  
                                          ████          ██████      ██                                                    
                                        ████          ████          ██                                                    
                                      ██              ██            ██                                                    
                                      ██              ████          ██                                                    
                                        ██              ████        ██                                                    
                                          ▓▓▓▓██                    ░░▓▓                                                  
                                              ██                                                                          
                                              ░░                                        
                `;
  const coffee = String.raw`
                                                                    
                                ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                                      
                          ▓▓▓▓▓▓██░░░░    ░░░░    ░░░░    ░░░░    ░░░░    ░░░░  ░░██▓▓▓▓▓▓██                              
                    ▓▓▓▓████░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒  ░░░░░░  ████                            
                  ████░░░░░░▓▓▓▓████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▓▓▓▓▓▓▓▓    ████                          
                  ██░░▓▓▓▓████░░░░                                            ░░▒▒░░░░██▓▓██  ██                          
                ░░▓▓  ██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓██  ██                          
                  ▓▓  ██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██  ██        ▒▒▓▓▓▓▒▒██        
                ░░▓▓  ░░░░██▓▓▓▓▓▓▓▓▓▓██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓██  ██    ▒▒████  ░░░░████      
                  ▓▓      ░░░░░░▒▒░░░░████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████░░░░▒▒    ██  ████░░░░      ░░██▒▒    
                  ██                  ░░░░░░▒▒░░░░▒▒▒▒░░░░▒▒▒▒░░░░▒▒░░░░░░▒▒▒▒░░░░░░          ██████░░            ░░██▒▒  
                  ▓▓                                                                          ████    ██████████    ░░▓▓  
                  ▓▓                                                                          ████████        ████    ░░██
                  ▓▓                                                                          ██  ██            ██    ░░██
                  ▓▓                                                                          ████              ██    ░░██
                  ▓▓        ██                                                                ████          ██████    ░░██
                  ▓▓        ██                                                                ████████████████        ░░██
                  ▓▓        ██                                                                ██                      ░░██
                  ▓▓        ██                                                                ██                    ░░████
                  ▓▓        ████                                                              ████                ██▓▓    
                  ▓▓          ██                                                              ████████████████████        
                  ▓▓          ████                                                            ██░░      ░░    ░░░░        
                  ██▓▓          ██                                                            ██                          
                  ░░████          ██                                                          ██                          
                      ██▓▓        ████                                                    ▓▓▓▓██                          
                      ░░██▓▓        ████                                              ▓▓▓▓██  ░░                          
              ▓▓██▓▓▓▓▓▓██████      ░░██▓▓██                                      ▓▓████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓██              
      ████▓▓████  ░░░░    ░░██▓▓██        ██                                      ██████  ░░░░    ░░░░    ░░▓▓▓▓▓▓▓▓▒▒    
    ████░░░░░░░░            ░░████▓▓██    ░░                                  ▓▓██████░░                    ░░░░░░  ██▒▒  
  ████                          ██████                                    ████████                                    ░░██
  ██░░                            ████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██████                                      ████
  ████                            ▒▒████████████████████████████████████████▒▒                                      ████░░
    ██                              ░░░░▒▒░░░░░░▒▒░░░░░░▒▒░░░░▒▒░░░░░░░░░░                                  ▒▒▒▒▒▒████░░  
    ████▒▒                                                                                        ▒▒▒▒▒▒▒▒████▒▒▒▒░░░░    
    ░░  ██▒▒▒▒                                                                        ▒▒▒▒▒▒▒▒▒▒████▒▒░░░░▒▒░░            
          ░░████████████████████████████████████                            ██████████                                    
                                              ██████████████████████████████▓▓                                            
  `;

  const steamLines = steam.trimEnd().split("\n");
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const total = steamLines.length;
    const interval = window.setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= total) {
          return 0;
        }
        return prev + 1;
      });
    }, 140);

    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const visibleSteam = steamLines
    .map((line, index) => {
      const total = steamLines.length;
      const shouldShow = index >= total - visibleLines;
      // Keep each line's width constant; hide unrevealed lines as spaces
      if (shouldShow) return line;
      return " ".repeat(line.length || 1);
    })
    .join("\n");

  const recentBlogItems: RecentItem[] = blogPosts.map((p) => ({
    type: "Blog",
    title: p.title,
    date: p.date,
    href: `/blog/${p.slug}`,
  }));

  const recentProjectItems: RecentItem[] = projects.map((p) => ({
    type: "Project",
    title: p.title,
    date: p.date,
    href: `/projects/${p.slug}`,
  }));

  const recentItems: RecentItem[] = [...recentBlogItems, ...recentProjectItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.left}>
          <div className={styles.asciiWrap}>
            <pre className={styles.asciiArt}>
              {visibleSteam}
              {coffee}
            </pre>
          </div>
          <div className={styles.sub}>
            Cappuccino moment — ASCII, with steam drawing in layer by layer.
            {" "}
            <span className={styles.credit}>
              Coffee ASCII from{" "}
              <a
                href="https://textart.sh/topic/coffee"
                target="_blank"
                rel="noreferrer"
              >
                textart.sh
              </a>
              .
            </span>
          </div>
        </div>
        <aside className={styles.recent}>
          <div className={styles.recentHeader}>
            <h2 className={styles.recentTitle}>Recent developments</h2>
          </div>
          <div className={styles.recentList}>
            {recentItems.map((item) => (
              <Link key={`${item.type}-${item.href}`} to={item.href} className={styles.recentItem}>
                <div className={styles.recentRow}>
                  <span className={styles.recentTag}>{item.type}</span>
                  <span className={styles.recentDate}>{item.date}</span>
                </div>
                <div className={styles.recentText}>{item.title}</div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}