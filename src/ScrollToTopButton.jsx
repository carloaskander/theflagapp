// ScrollToTopButton.jsx
import React, { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from './contexts/DarkModeContext';

import './ScrollToTopButton.css';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const { darkMode } = useContext(DarkModeContext);

    // Listen for scroll events
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    return (
        isVisible && (
            <button  onClick={scrollToTop} className={`scroll-to-top ${darkMode ? 'dark' : 'light'}`}>
                ↑
            </button>
        )
    );
}

export default ScrollToTopButton;
