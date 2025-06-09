import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
const Navbar = () => {
  const [isMobile , setIsMobile] = useState(window.innerWidth <= 480);
  const [isOpen, setIsOpen] = useState();

    useEffect(() => {

      const resizeHandler = () => {
        setIsMobile(window.innerWidth <= 480);
        if(window.innerWidth > 480) {
          setIsOpen(false);
        }
      } 

      window.addEventListener('resize', resizeHandler);
      return () => window.removeEventListener('resize', resizeHandler);

    }, []) 

    const toggleClick = () => {
      setIsOpen(!isOpen)
      
    }

  return (
    <>
      <div className="navbar">
        <div className="nav-brand">
          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`} 
            onClick={toggleClick}
            aria-label="Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <h2 className="nav-title">JakCulinary.</h2>
        </div>
        <div className={`nav-menu ${isMobile && (isOpen ? 'active' : '')}`}> 
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
