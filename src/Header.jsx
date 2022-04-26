import React from "react";
import './assets/Header.css'

export default function Header() {
    return ( 
        <header>
            <div className="container">
                <nav className="nav_checkbox">

                    <a href="#" className="logo">
                        <h2>Random Movies</h2>
                    </a>

                    <input type="checkbox" id="tab-nav" className="tab-nav" />
                    <label htmlFor="tab-nav" className="label">
                        <div className="burger"></div>
                        <div className="burger"></div>
                        <div className="burger"></div>
                    </label>

                    <ul className="content_nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>

                </nav>
            </div>
        </header>
    );
}