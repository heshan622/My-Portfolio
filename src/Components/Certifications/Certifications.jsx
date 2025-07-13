import React, { useState } from 'react';
import './Certifications.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_left from '../../assets/arrow_left.svg'; // You will need a left arrow icon
import arrow_right from '../../assets/arrow_right.svg'; // You will need a right arrow icon

// --- IMPORTANT: Import your certificate images here ---
import cert1 from '../../assets/cert1.png'; // Example
import cert2 from '../../assets/cert2.png'; // Example
import cert3 from '../../assets/cert3.png'; // Example
import cert4 from '../../assets/cert4.png'; // Example
import cert5 from '../../assets/cert5.png'; // Example
import cert6 from '../../assets/cert6.png'; // Example
import cert7 from '../../assets/cert7.png'; // Example
import cert8 from '../../assets/cert8.png'; // Example
import cert9 from '../../assets/cert9.png'; // Example
import cert10 from '../../assets/cert10.png'; // Example
import cert11 from '../../assets/cert11.png'; // Example

// --- Create your certifications data array ---
const certifications_data = [
    {
        c_no: "01",
        c_name: "React Development Certification",
        c_img: cert1
    },
    {
        c_no: "02",
        c_name: "Advanced CSS and Sass",
        c_img: cert2
    },
    {
        c_no: "03",
        c_name: "JavaScript Algorithms and Data Structures",
        c_img: cert3
    },
    {
        c_no: "04",
        c_name: "JavaScript Algorithms and Data Structures",
        c_img: cert4
    },
    {
        c_no: "05",
        c_name: "JavaScript Algorithms and Data Structures",
        c_img: cert5
    },
    {
        c_no: "06",
        c_name: "JavaScript Algorithms and Data Structures",
        c_img: cert6
    },
    {
        c_no: "07",
        c_name: "JavaScript Algorithms and Data Structures",
        c_img: cert7
    },
    {
        c_no: "08",
        c_name: "JavaScript Algorithms and Data Structures",
        c_img: cert8
    },
    {
        c_no: "09",
        c_name: "JavaScript Algorithms and Data Structures",
        c_img: cert9
    },
    {
        c_no: "10",
        c_name: "JavaScript Algorithms and Data Structures",
        c_img: cert10
    },
    {
        c_no: "11",
        c_name: "JavaScript Algorithms and Data Structures",
        c_img: cert11
    },
    // ... add all your other certificates here
];

const Certifications = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideForward = () => {
        // This will loop back to the start if at the end
        setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications_data.length);
    };

    const slideBackward = () => {
        // This will loop to the end if at the start
        setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications_data.length) % certifications_data.length);
    };

    // Get the current certificate based on the index
    const currentCertificate = certifications_data[currentIndex];

    return (
        <div id='certifications' className='certifications'>
            <div className="certifications-title">
                <h1>My Certifications</h1>
                <img src={theme_pattern} alt="decorative pattern" />
            </div>

            <div className="slider-viewport">
                {/* Blurred Background Image */}
                <div 
                    className="slider-bg-blur" 
                    style={{ backgroundImage: `url(${currentCertificate.c_img})` }}
                ></div>

                {/* Clear Foreground Image */}
                <img 
                    src={currentCertificate.c_img} 
                    alt={currentCertificate.c_name} 
                    className="slider-image"
                />

                {/* Navigation Buttons */}
                <div className="slider-nav">
                    <img src={arrow_left} alt="slide backward" onClick={slideBackward} className="slider-btn" />
                    <img src={arrow_right} alt="slide forward" onClick={slideForward} className="slider-btn" />
                </div>
            </div>
        </div>
    );
};

export default Certifications;
