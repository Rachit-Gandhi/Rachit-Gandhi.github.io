import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./theme";
import Header from "./components/organisms/Header";
import Sidebar from "./components/organisms/Sidebar";
import Hero from "./components/organisms/Hero";
import PortfolioSection from "./components/organisms/PortfolioSection";
import BlogSection from "./components/organisms/BlogSection";
import Footer from "./components/organisms/Footer";
import "./styles/global.css";

function setThemeVars(theme: typeof lightTheme | typeof darkTheme) {
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([k, v]) => {
    root.style.setProperty(`--${k}`, v as string);
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
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="content">
        <Hero />
        <PortfolioSection />
        <BlogSection />
      </main>

      <Footer />
    </div>
  );
}
