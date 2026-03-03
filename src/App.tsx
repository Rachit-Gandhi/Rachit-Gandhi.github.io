import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { darkTheme, lightTheme } from "./theme";
import "./App.css";

function setThemeVars(theme: typeof lightTheme | typeof darkTheme) {
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([k, v]) => {
    root.style.setProperty(`--${k}`, v);
  });
  root.setAttribute("data-theme", theme.name);
}

function getThemeByLocalTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const isLight = hours > 9 || (hours === 9 && minutes >= 0)
    ? hours < 17 || (hours === 17 && minutes <= 30)
    : false;
  return isLight ? lightTheme : darkTheme;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setThemeVars(getThemeByLocalTime());
  }, []);

  return (
    <div className="page">
      <header className="header">
        <div className="header-left">
          <button className="nav-button home">Home</button>
        </div>
        <nav className="header-right">
          <button className="nav-button">Portfolio</button>
          <button className="nav-button">Blog</button>
          <button className="nav-button">Contact Me</button>
        </nav>
        <button
          className="menu-toggle"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={20} />
        </button>
      </header>

      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span>Menu</span>
          <button
            className="icon-button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={18} />
          </button>
        </div>
        <div className="sidebar-links">
          <button className="sidebar-link">Home</button>
          <button className="sidebar-link">Portfolio</button>
          <button className="sidebar-link">Blog</button>
          <button className="sidebar-link">Contact Me</button>
        </div>
      </aside>

      <main className="content">
        <div className="placeholder">
          Base layout ready. We’ll fill this next.
        </div>
      </main>

      <footer className="footer">
        <div className="footer-left">Connect</div>
        <div className="footer-right">
          <a href="https://www.linkedin.com/in/rachit-gandhi27" aria-label="LinkedIn" className="icon-link">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/Rachit-Gandhi" aria-label="GitHub" className="icon-link">
            <Github size={18} />
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" aria-label="X (Rickroll)" className="icon-link">
            <X size={18} />
          </a>
          <a href="mailto:rachitgandhi27@gmail.com" aria-label="Email" className="icon-link">
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}
