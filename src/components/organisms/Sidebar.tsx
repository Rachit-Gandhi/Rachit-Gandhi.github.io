import { X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import styles from "./Sidebar.module.css";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
      <div className={styles.header}>
        <span>Menu</span>
        <button className={styles.iconButton} aria-label="Close menu" onClick={onClose}>
          <X size={18} />
        </button>
      </div>
      <div className={styles.links}>
        <Link to="/" className={styles.linkWrap}><Button className={styles.link}>Home</Button></Link>
        <Link to="/portfolio" className={styles.linkWrap}><Button className={styles.link}>Portfolio</Button></Link>
        <Link to="/blog" className={styles.linkWrap}><Button className={styles.link}>Blog</Button></Link>
        <Button className={styles.link}>Contact Me</Button>
      </div>
    </aside>
  );
}
