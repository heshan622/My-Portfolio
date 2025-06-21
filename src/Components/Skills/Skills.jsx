import React from 'react';
import './Skills.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import react_icon from '../../assets/react_icon.svg';
import nodejs_icon from '../../assets/nodejs_icon.svg';
import mongodb_icon from '../../assets/mongodb_icon.svg';
import express_icon from '../../assets/express_icon.svg';
import html_icon from '../../assets/html_icon.svg';
import css_icon from '../../assets/css_icon.svg';
import js_icon from '../../assets/js_icon.svg';
import j_icon from '../../assets/j_icon.svg';
import mysql_icon from '../../assets/mysql_icon.svg';
import tailwind_icon from '../../assets/tailwind_icon.svg';
import selenium_icon from '../../assets/selenium_icon.svg';

const skills_data = [
    { s_no: "01", s_name: "React.js", s_icon: react_icon },
    { s_no: "02", s_name: "Node.js", s_icon: nodejs_icon },
    { s_no: "03", s_name: "Express.js", s_icon: express_icon },
    { s_no: "04", s_name: "MongoDB", s_icon: mongodb_icon },
    { s_no: "05", s_name: "HTML", s_icon: html_icon },
    { s_no: "06", s_name: "CSS", s_icon: css_icon },
    { s_no: "07", s_name: "JavaScript", s_icon: js_icon },
    { s_no: "08", s_name: "Java", s_icon: j_icon },
    { s_no: "08", s_name: "MySQL", s_icon: mysql_icon },
    { s_no: "09", s_name: "Tailwind CSS", s_icon: tailwind_icon },
    { s_no: "10", s_name: "Selenium", s_icon: selenium_icon },
    
];

const Skills = () => {
  return (
    <div id='skills' className='skills'>
        <div className="skills-title">
            <h1>My Skills</h1>
            <img src={theme_pattern} alt="decorative pattern" />
        </div>
        <div className="skills-container">
            {skills_data.map((skill, index) => {
                return (
                    <div key={index} className="skill-format">
                        <img src={skill.s_icon} alt={`${skill.s_name} icon`} />
                        <h3>{skill.s_name}</h3>
                    </div>
                );
            })}
        </div>
    </div>
  );
};

export default Skills;
