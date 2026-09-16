import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">F<span>.</span>Kamal</h1>

        <ul className="footer__list">
          <li><a href="#home" className="footer__link">Home</a></li>
          <li><a href="#about" className="footer__link">About</a></li>
          <li><a href="#skills" className="footer__link">Skills</a></li>
          <li><a href="#qualification" className="footer__link">Experience</a></li>
          <li><a href="#services" className="footer__link">Companies</a></li>
          <li><a href="#projects" className="footer__link">Projects</a></li>
          <li><span className="footer__link" style={{cursor:'pointer'}} onClick={() => window.scrollTo(0,0)}>Life</span></li>
          <li><a href="#contact" className="footer__link">Contact</a></li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/fariz_afnan/" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/fariz-kamal-b7713572/" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/fafnanbd64" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; 2025 F.Kamal — built with React</span>
      </div>
    </footer>
  );
};

export default Footer;
