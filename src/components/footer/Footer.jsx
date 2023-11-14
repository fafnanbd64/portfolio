import React from 'react';
import "./footer.css";
import ScrollUp from '../scrollup/ScrollUp';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title"> F.Kamal </h1>
        <ul className="footer__list">
          <li>
            <a href="#home" 
            className="footer__link">Home</a>
          </li>
          <li>
            <a href="#about" 
            className="footer__link">About</a>
          </li>
          <li>
            <a href="#skills" 
            className="footer__link">Skills</a>
          </li>
          <li>
            <a href="#services" 
            className="footer__link">Services</a>
          </li>
          <li>
            <a href="#qualification" 
            className="footer__link">Qualification</a>
          </li>

          <li>
            <a href="#testimonials" 
            className="footer__link">Testimonials</a>
          </li>
          <li>
            <a href="#contact" 
            className="footer__link">Contact</a>
          </li>
          
          
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/fariz_afnan/" className="home__social-icon" target="_blank">
                <i class="bx bxl-instagram"></i>
            </a>
            <a href="https://www.facebook.com/Fariz.Afnan" className="home__social-icon" target="_blank">
                <i class="bx bxl-facebook"></i>
            </a>
            <a href="https://github.com/fafnanbd64" className="home__social-icon" target="_blank">
                <i class="uil uil-twitter-alt"></i>
        </a> 
        </div>
        <span className='footer__copy'> &#169; F.Kamal. All rights reserved 
        </span>
      </div>

      
    </footer>
  )
}

export default Footer