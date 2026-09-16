import React from 'react';
import './data.css';

const Data = () => {
    return (
        <div className="home__data">
            <span className="home__greeting">hey, I'm</span>
            <h1 className="home__title">Fariz Kamal</h1>
            <h3 className="home__subtitle">Analytics Engineer | Software Engineer</h3>
            <p className="home__description">
                Building end-to-end data workflows — event instrumentation, A/B testing, and dbt
                pipelines on Snowflake. Currently at Guitar Center in LA. Passionate about fintech data
                infrastructure that drives smarter products.
                <br /><br />
                🏎 F1 fanatic
                ⚽️ Liverpool supporter
                📊 Aspiring unicorn builder.
                <br /> 🏸 Love playing badminton
                📸 Photographer by heart - Check some of my favourite works below. <br />
            </p>
            <div className="home__buttons">
                <a href="#contact" className="button button--flex">
                    Let's talk
                    <i className="uil uil-arrow-right button__icon-uil"></i>
                </a>
                <a href="#projects" className="button button--ghost">
                    My work
                </a>
            </div>
        </div>
    );
};

export default Data;
