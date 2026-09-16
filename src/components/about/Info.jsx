import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <div>
                    <h3 className="about__title">CS Graduate</h3>
                    <span className="about__subtitle">Western Michigan University</span>
                </div>
            </div>
            <div className="about__box">
                <i className="bx bx-data about__icon"></i>
                <div>
                    <h3 className="about__title">Analytics Engineer</h3>
                    <span className="about__subtitle">2+ yrs · Guitar Center, LA</span>
                </div>
            </div>
            <div className="about__box">
                <i className="bx bx-camera about__icon"></i>
                <div>
                    <h3 className="about__title">Photographer</h3>
                    <span className="about__subtitle">Symmetry obsessed</span>
                </div>
            </div>
            <div className="about__box">
                <i className="bx bx-rocket about__icon"></i>
                <div>
                    <h3 className="about__title">Entrepreneur</h3>
                    <span className="about__subtitle">Someday — it's coming</span>
                </div>
            </div>
        </div>
    );
};

export default Info;
