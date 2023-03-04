import React from "react";
import "../styles/Header.css"

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <h1 className="header-title">portfol-io</h1>
            </div>
            <div className="header-right">
                <button className="header-option">portfolio</button>
                <button className="header-option">qualifications</button>
                <button className="header-option">experience</button>
                <button className="header-option contact-me">contact me</button>
            </div>
        </header>
    );
}

export default Header;
