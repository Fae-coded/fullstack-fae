import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Contact from "./ContactBar";

export default function Banners() {
    return (
        <div className="banners">
            <Navbar />
            <Outlet />
            <Contact className="contact" />
        </div>
    );
}