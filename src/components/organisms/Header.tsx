import { Menu } from "lucide-react";
import Button from "../atoms/Button";
import styles from "./Header.module.css";

type HeaderProps = {
  onMenuOpen: () => void;
};

export default function Header({ onMenuOpen }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Button>Home</Button>
      </div>
      <nav className={styles.right}>
        <Button>Portfolio</Button>
        <Button>Blog</Button>
        <Button>Contact Me</Button>
      </nav>
      <button className={styles.menuToggle} aria-label="Open menu" onClick={onMenuOpen}>
        <Menu size={20} />
      </button>
    </header>
  );
}
