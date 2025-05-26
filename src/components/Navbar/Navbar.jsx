import "./Navbar.css";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-brand">
          <h2>JakCulinary.</h2>
        </div>
        <div className="nav-menu">
          <div className="nav-links">
            <NavLink to="/" className="nav-item" end>
              Home
            </NavLink>
            <NavLink to="/about-us" className="nav-item">
              About
            </NavLink>
            <NavLink to="/culinaries" className="nav-item">
                Culinaries
            </NavLink>
            <NavLink to="/contact-us" className="nav-item">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
