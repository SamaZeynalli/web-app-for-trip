import React from "react";
import './footer.css';


const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer_main">
                <div>
                    <img src="./IMG/Logotourist.png" alt="" />
                    <p>Discover the world's wonders and let us be your trusted guide to extraordinary destinations.</p>
                </div>
                <span>© Copyright 2023 Tourista Ltd. All Rights Reserved.</span>
            </div>
            <div>
                <h3>Menu</h3>
                <ul className="links">
                    <li>Destinations</li>
                    <li>Private trips</li>
                    <li>Blog</li>
                    <li>About us</li>
                </ul>
            </div>
            <div>
                <h3>Support</h3>
                <ul className="links">
                    <li>Contact us</li>
                    <li>FAQ</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                </ul>
            </div>
            <div>
                <h3>Follow us</h3>
                <ul className="links">
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Linkedin</li>
                    <li>Tiktok</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;