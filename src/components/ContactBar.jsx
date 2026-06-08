import { Link } from 'react-router';
import "./ContactBar.css";
export default function ContactBar() {
    return (
        <div className="contact-bar">
            <Link className="contact-link" to= "https://www.linkedin.com/in/fae-coded/" >LinkedIn</Link>
            <Link className="contact-link" to= "https://github.com/Fae-coded" >Github</Link>
            {/* Email */}
        </div>
    )
}