import React from 'react';
import '../css File/Header.css';
import logo from "../assets/logo.jpg"

const Header = () => {
  return (
    <div>
      
        <header className="header">
        <div><img src={logo} alt="Logo" className="header-logo" />
        <h1 >Caters HUB</h1></div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Notepad">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
      
    </div>
  )
}

export default Header