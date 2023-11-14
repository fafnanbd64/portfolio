import React, { useState, useEffect } from 'react';
import "./header.css";

const Header = () => {

    
    /* Tpggle menu*/
   const[Toggle, showMenu] = useState(false);
   /* Toggle menu */
   
   /* State to control the header width */
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
       const handleScroll = () => {
           // This value should be the vertical position where your second component starts.
           const positionToChangeHeader = 100; // Adjust based on your layout
           setIsScrolled(window.scrollY > positionToChangeHeader);
       };

       // Attach the event listener
       window.addEventListener("scroll", handleScroll);

       // Remove the event listener on cleanup
       return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
    <header className='header'>
        <nav className="nav ">
            <a href="logo" className="nav__logo">Fariz Kamal</a>
            <div className={Toggle ? "nav__menu show-menu":
            "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i> 0.Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i> 1.About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i> 2.Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i>3.Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#qualification" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i> 4.Qualification
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#testimonials" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i> 5.Testimonials 
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i> 6.Contact
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" onClick={() => showMenu
            (!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={() => showMenu
            (!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header