import { useState } from "react";
import Header from "../components/organisms/Header";
import Sidebar from "../components/organisms/Sidebar";
import Footer from "../components/organisms/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}
