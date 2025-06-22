import React, { useState } from 'react';
import './Portfolio.css';
import theme_pattern from '../../assets/theme_pattern.svg';

// --- Import all your project images and videos as before ---
import project1_img from '../../assets/project1_thumbnail.png';
import project2_img from '../../assets/project2_thumbnail.png';
import project3_img from '../../assets/project3_thumbnail.png';
import project4_img from '../../assets/project4_thumbnail.png';
import project5_img from '../../assets/project5_thumbnail.png';
import project6_img from '../../assets/project6_thumbnail.png';
import project7_img from '../../assets/project7_thumbnail.png';
import project8_img from '../../assets/project8_thumbnail.png';
import project9_img from '../../assets/project9_thumbnail.png';

import project5_vid from '../../assets/project5_demo.mp4';
import project6_vid from '../../assets/project6_demo.mp4';


// --- Your project data array ---
const mywork_data = [
    { w_no: "01", w_name: "Hotel Booking Site", w_desc: "Full-stack hotel booking app using MERN stack. Includes room listings, bookings, login & admin panel. (Ongoing Project)", w_tech: "React, Express.js, MongoDB, Node.js", w_img: project1_img, w_video: null, w_url: "https://hotel-booking-site-front-end.vercel.app/" },
    { w_no: "02", w_name: "Personal Portfolio", w_desc: "Frontend web app built with React and custom CSS. Focused on responsive design and interactive UI.", w_tech: "React, CSS", w_img: project2_img, w_video: null, w_url: "https://github.com/heshan622/My-Portfolio" },
    { w_no: "03", w_name: "Coffee Shop Website", w_desc: "Responsive coffee shop website built with HTML, CSS, and JavaScript. Elegant design with smooth navigation.", w_tech: "HTML, CSS, JavaScript", w_img: project3_img, w_video: null, w_url: "https://heshan622.github.io/Coffee-Shop-Site/" },
    { w_no: "04", w_name: "Airline Ticket Reservation System", w_desc: "Desktop app for airline ticket booking built with Java Swing and MySQL.", w_tech: "Java, Java Swing, MySQL", w_img: project4_img, w_video: null, w_url: "https://github.com/heshan622/Airline-Ticket-Booking-System" },
    { w_no: "05", w_name: "Hotel Booking Automation", w_desc: "Automated hotel booking on PHPTRAVELS using Selenium WebDriver, TestNG, and Java.", w_tech: "Selenium, TestNG, Java, Maven", w_img: project5_img, w_video: project5_vid, w_url: "https://github.com/heshan622/HotelBooking_Selenium" },
    { w_no: "06", w_name: "Mobile Purchase Automation", w_desc: "Automated mobile purchase workflow on eBay using Selenium WebDriver, TestNG, and Java.", w_tech: "Selenium, TestNG, Java, Maven", w_img: project6_img, w_video: project6_vid, w_url: "https://github.com/heshan622/MobilePurchaseTestNG" },
    { w_no: "07", w_name: "Student Management System", w_desc: "Desktop app for managing student records built with Java Swing and MySQL.", w_tech: "Java, Java Swing, MySQL", w_img: project7_img, w_video: null, w_url: "https://github.com/heshan622/Student-Management-System" },
    { w_no: "08", w_name: "ToDo Application", w_desc: "Desktop ToDo app built with Java Swing using file handling for task storage.", w_tech: "Java, Java Swing, .txt", w_img: project8_img, w_video: null, w_url: "https://github.com/heshan622/ToDoApp" },
    { w_no: "09", w_name: "Login and Sign-Up System", w_desc: "Desktop login and sign-up system built with Java Swing and MySQL.", w_tech: "Java, Java Swing, MySQL", w_img: project9_img, w_video: null, w_url: "https://github.com/heshan622/LoginAndSignUpPage" },
];

const Portfolio = () => {
    // This state will track which project card is being hovered over
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <div id='portfolio' className='portfolio'>
            <div className="portfolio-title">
                <h1>My Portfolio</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="portfolio-container">
                {mywork_data.map((work, index) => {
                    const isHovered = hoveredProject === work.w_no;
                    return (
                        <a 
                            href={work.w_url} 
                            key={index} 
                            className={`portfolio-format ${work.w_video ? 'has-video' : ''}`}
                            onMouseEnter={() => setHoveredProject(work.w_no)}
                            onMouseLeave={() => setHoveredProject(null)}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {work.w_video && isHovered ? (
                                <video src={work.w_video} autoPlay loop muted playsInline className="portfolio-media" />
                            ) : (
                                <img src={work.w_img} alt={work.w_name} className="portfolio-media" />
                            )}
                            <div className="portfolio-overlay">
                                <h3>{work.w_name}</h3>
                                <p className="portfolio-desc">{work.w_desc}</p>
                                <p className="portfolio-tech-title">Used Technologies</p>
                                <p className="portfolio-tech">{work.w_tech}</p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Portfolio;
