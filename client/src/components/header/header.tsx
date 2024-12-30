import { Link } from "react-router";
import ThemeSwitcher from "../theme-switcher/theme-switcher";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.test}>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <nav className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/sales">Sales</Link>
        <Link to="/products">Products</Link>
        <Link to="/analytics">Analytics</Link>
      </nav>
      <div className="navbar-right">
        <ThemeSwitcher />
        {/* <img src="/path-to-avatar.jpg" alt="User Avatar" className="avatar" /> */}
      </div>
    </header>
  );
};

export default Header;
