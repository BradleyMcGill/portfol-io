import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleModeChange = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
            <Header />
            <Welcome />
            <AboutMe />
            <Footer onModeChange={handleModeChange} isDarkMode={isDarkMode} />
        </div>
    );
}

export default App;
