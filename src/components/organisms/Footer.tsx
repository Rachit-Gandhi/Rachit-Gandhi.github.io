import { Github, Linkedin, Mail, X } from "lucide-react";
import IconLink from "../atoms/IconLink";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div></div>
      <div className={styles.icons}>
        <IconLink href="https://www.linkedin.com/in/rachit-gandhi27" label="LinkedIn">
          <Linkedin size={18} />
        </IconLink>
        <IconLink href="https://github.com/Rachit-Gandhi" label="GitHub">
          <Github size={18} />
        </IconLink>
        <IconLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" label="X (Rickroll)">
          <X size={18} />
        </IconLink>
        <IconLink href="mailto:rachitgandhi27@gmail.com" label="Email">
          <Mail size={18} />
        </IconLink>
      </div>
    </footer>
  );
}
