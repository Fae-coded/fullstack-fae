import { Link } from 'react-router';
import "./MiniNav.css";

export default function MiniNav() {

    /* {menuOpen && (<Link className = "navbar-link" to="/" onClick={closeMenu}>Home</Link>)} */
 
    return (
        
        <div className= "mininav">
          <p className= "mininav-text">Click below to learn more:</p>
          <Link className = "mininav-link" to="/">Home</Link>
          <Link className = "mininav-link" to="/projects">Projects</Link>
          <Link className = "mininav-link" to="/experience">Experience</Link>
          <Link className = "mininav-link" to="/interests">Interests</Link>
        </div>        
    )
}