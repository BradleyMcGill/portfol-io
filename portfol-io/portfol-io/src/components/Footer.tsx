import React from "react";
import Switch from '@material-ui/core/Switch';
import "../styles/Footer.css"

interface FooterProps {
    onModeChange: () => void;
    isDarkMode: boolean;
}

function Footer({ onModeChange, isDarkMode }: FooterProps) {
    return (
        <footer className="footer">
            <Switch
                checked={isDarkMode}
                onChange={onModeChange}
                />
        </footer>
    );
}

export default Footer;
