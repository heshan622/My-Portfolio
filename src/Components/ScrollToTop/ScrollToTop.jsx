import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';
import arrow_icon from '../../assets/arrow_up.svg';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop} className="scroll-button">
                    <img src={arrow_icon} alt="Go to top" />
                </div>
            )}
        </div>
    );
};

export default ScrollToTop;
