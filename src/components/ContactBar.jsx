import { Link } from 'react-router';
import "./ContactBar.css";
export default function ContactBar() {
    return (
        <div className="contact-bar">
            <Link className="contact-link" to= "" >LinkedIn</Link>
            <Link className="contact-link" to= "" >Github</Link>
            {/* Email */}
        </div>
    )
}