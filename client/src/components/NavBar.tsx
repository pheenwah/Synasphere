import "../styles/components/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="app-navbar">
      <div className="app-navbar-inner">
        <div className="app-logo">SynaSphere</div>

        <nav className="app-nav">
          <Link to="/profile">Profile</Link>
          <Link to="/connections">Connections</Link>
          <Link to="/community">Community</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/landing">Logout</Link>
        </nav>
      </div>
    </header>
  );
}
