import React from "react";
import './header.css';
import {Link} from 'react-router-dom';
import MyImage from '../IMG/Logotourist.png';
import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';


const Header = () => {
        const directToLogin = () => {
        window.location.href = '/login';
      };

        const navRef = useRef();

        const showNavbar = () => {
            navRef.current.classList.toggle("responsive_nav");
        }

        const [isOpen, setIsOpen] = useState(false);
        const [selectedCurrency, setSelectedCurrency] = useState('USD$');

        const currencies = [
            { code: 'AZN', symbol: '₼' },
            { code: 'EUR', symbol: '€' },
            { code: 'RUB', symbol: '₽' },
        ];

        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };

        const selectCurrency = (currencyCode) => {
            setSelectedCurrency(currencyCode);
            setIsOpen(false);
        };

    return(
            <div className="header">
                <div className="secondaryHeader mobile-hidden">
                <div className="container">
                    <ul className="links">
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/FAQ">FAQ</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/Contactus">Contact us</Link></li>
                    </ul>
                    <div className="currency-button-container">
                        <button className="currency-button" onClick={toggleDropdown}>
                            {selectedCurrency} 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16 15L12 19L8 15" stroke="#0F0339" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 9L12 5L16 9" stroke="#141D24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
      
                        {isOpen && (
                            <div className="currency-dropdown">
                            {currencies.map((currency) => (
                                <div key={currency.code} className="currency-option" onClick={() => selectCurrency(currency.code)}>
                                {currency.code} {currency.symbol}
                                </div>
                            ))}
                            </div>
                        )}
                    </div>
                </div>
                </div>
                <div className="mainHeader">
                    <div className="container">
                        <nav className="menu responsive_nav" ref={navRef}>
                            <div className="link"><Link to="/Destinations" className="destination">Destinations</Link></div>
                            <div className="link"><Link to="/Privatetrips" className="destination">Private trips</Link></div>
                            <button onClick={showNavbar} className="show">
                                <FaBars />
                            </button>
                        </nav>
                        <div className="myImage">
                            <img src={MyImage} alt="" />
                        </div>
                        <div className="loginBtn">
                                <button>I'm Feeling Lucky</button>
                                <button onClick={directToLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Header;