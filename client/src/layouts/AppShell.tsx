import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import "../styles/layouts/AppShell.css";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <NavBar /> <main className="app-shell-content">{children}</main>
      <Footer />
    </div>
  );
}
