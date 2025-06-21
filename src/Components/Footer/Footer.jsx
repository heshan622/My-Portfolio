import React from 'react';
import './Footer.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
    
    const onSubscribe = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "c6cad3d7-c415-447b-89f3-5b2a168a9e4c"); 
        formData.append("subject", "New Subscription from Portfolio");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
          }).then((res) => res.json());
          if (res.success) {
            alert("Thank you for subscribing!");
            event.target.reset();
          } else {
            alert("Subscription failed. Please try again.");
          }
    }

  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* Replaced image with text-based logo */}
                <div className="footer-logo-container">
                    <h1>Hesh.</h1>
                    <img src={theme_pattern} alt="decorative pattern" />
                </div>
                <p>I am a full-stack developer from Sri Lanka, with a passion for creating dynamic and user-friendly web applications.</p>
            </div>
            <form onSubmit={onSubscribe} className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="user icon" />
                    <input type="email" name="email" placeholder='Enter your email' required/>
                </div>
                <button type='submit' className="footer-subscribe">Subscribe</button>
            </form>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Pasindu Heshan. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  );
}

export default Footer;
