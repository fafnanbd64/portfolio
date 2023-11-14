import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid"> 
        <div className="about__box">
            <i class="bx bx-award about__icon"></i>
            <h3 className="about__title"> CS Graduate </h3>
            <span className="about__subtitle">Western Michigan University - Kalamazoo, MI. </span>
        </div>
        <div className="about__box">
            <i class="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title"> <br/>Engineer </h3>
            <span className="about__subtitle">More than 50 software projects</span>
        </div>
        <div className="about__box">
            <i class="bx bx-camera about__icon"></i>
            <h3 className="about__title">Photographer</h3>
            <span className="about__subtitle">Symmetry inspires me. </span>
        </div>
        <div className="about__box">
            <i class="bx bx-user about__icon"></i>
            <h3 className="about__title">Entrepreneur</h3>
            <span className="about__subtitle"> Wannabe, but will make it someday. </span>
        </div>
    </div>
  )
}

export default Info