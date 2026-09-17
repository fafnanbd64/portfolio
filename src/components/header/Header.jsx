import React, { useState, useEffect, useCallback } from 'react';
import "./header.css";

const NAV_ITEMS = [
    { id: 'home', label: 'Home', icon: 'uil-estate' },
    { id: 'about', label: 'About', icon: 'uil-user' },
    { id: 'skills', label: 'Skills', icon: 'uil-brackets-curly' },
    { id: 'qualification', label: 'Experience', icon: 'uil-briefcase-alt' },
    { id: 'services', label: 'Companies', icon: 'uil-building' },
    { id: 'projects', label: 'Projects', icon: 'uil-folder' },
    { id: 'life', label: 'Life', icon: 'uil-camera' },
    { id: 'contact', label: 'Contact', icon: 'uil-message' },
];

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [activeId, setActiveId] = useState('home');

    const closeMenu = useCallback(() => setToggle(false), []);

    useEffect(() => {
        const sections = NAV_ITEMS
            .map(item => document.getElementById(item.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
        );

        sections.forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <header className='header'>
            <nav className="nav">
                <a href="#home" className="nav__logo" onClick={closeMenu}>
                    F<span>.</span>Kamal
                </a>

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {NAV_ITEMS.map(item => (
                            <li className="nav__item" key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={item.id === activeId ? "nav__link active-link" : "nav__link"}
                                    onClick={closeMenu}
                                >
                                    <i className={`uil ${item.icon} nav__icon`}></i>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <i className="uil uil-times nav__close" onClick={closeMenu}></i>
                </div>

                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
