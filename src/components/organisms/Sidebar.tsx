import { X } from "lucide-react";
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
        <Button className={styles.link}>Home</Button>
        <Button className={styles.link}>Portfolio</Button>
        <Button className={styles.link}>Blog</Button>
        <Button className={styles.link}>Contact Me</Button>
      </div>
    </aside>
  );
}
