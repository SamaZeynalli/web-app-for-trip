import React from "react";
import './footer.css';
import Logo from'../IMG/Logotourist.png';


const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer_main">
                <div className="body">
                    <div className="logo">
                        <img src={Logo} alt="" />
                        <p>Discover the world's wonders and let us be your trusted guide to extraordinary destinations.</p>
                    </div>
                    <span>© Copyright 2023 Tourista Ltd. All Rights Reserved..</span>
                </div>
                <div className="support">
                    <h3>Menu</h3>
                    <ul className="links">
                        <li>Destinations</li>
                        <li>Private trips</li>
                        <li>Blog</li>
                        <li>About us</li>
                    </ul>
                </div>
                <div className="support">
                    <h3>Support</h3>
                    <ul className="links">
                        <li>Contact us</li>
                        <li>FAQ</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>
                <div className="support">
                    <h3>Follow us</h3>
                    <ul className="links">
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Linkedin</li>
                        <li>Tiktok</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;