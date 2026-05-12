import { useState } from 'react';
import { Link } from 'react-router';
import "./Navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
          <div className= "navbar">
            <div className= "navbar-btns-container">
            <button className= "navbar-btn-cv">Download CV</button>
            <button className= "navbar-btn-menu" onClick={toggleMenu}>
            </button>
            </div>
          </div>

          <div className= "navbar-link-list">
            {/* Separate styling according to media queries - desktop and mobile layouts */}
            {menuOpen && (<Link className = "navbar-link" to="/home" onClick={closeMenu}>Home</Link>)}
            {menuOpen && (<Link className = "navbar-link" to="/projects" onClick={closeMenu}>Projects</Link>)}
            {menuOpen && (<Link className = "navbar-link" to="/experience" onClick={closeMenu}>Experience</Link>)}
            {menuOpen && (<Link className = "navbar-link" to="/interests" onClick={closeMenu}>Interests</Link>)}
          </div>
        </>
    )
}