import React from 'react';
import "./qualification.css";
import { useState } from 'react';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section" id='qualification'>
    <h2 className="section__title"> Qualification</h2>
    <span className='section__subtitle'> My personal journey
    </span>

    <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className={
                toggleState === 1
                ?"qualification__button qualification__active button--flex"
                : "qualification__button button--flex"}
                onClick= {() => toggleTab(1)}>
                <i className="uil uil-graduation-cap
                qualification__icon"></i> Education
            </div>
            <div className={
                toggleState === 2
                ?"qualification__button qualification__active button--flex"
                : "qualification__button button--flex"}
                onClick= {() => toggleTab(2)
                }>
                <i className="uil uil-briefcase-alt 
                qualification__icon"></i>Experiences
            </div>
        </div>

        <div className="qualification__sections">
            <div className= {
                toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Bachelors in Computer Science</h3>
                        <span className="qualification__subtitle">Western Michigan University</span>
                        <div className="qualification__calender">
                            <i className="uil uil--calendar-alt"></
                            i>Spring 2021 - Summer II 20233
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder">

                        </span>
                        <span className="qualification__line"></span>
                    </div>
                </div>
                
                <div className="qualification__data">
                        <div></div>
                        <div>
                        <span className="qualification__rounder">
                        </span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Bachelors in Computer Science and Engineerings</h3>
                        <span className="qualification__subtitle">BRAC University</span>
                        <div className="qualification__calender">
                            <i className="uil uil--calendar-alt"></
                            i> Spring 2018 - Fall 2019 <br/> (Transferred to WMU)
                        </div>
                    </div>
                    
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title"> Advanced Level</h3>
                        <span className="qualification__subtitle"> Pearson Edexcel</span>
                        <div className="qualification__calender">
                            <i className="uil uil--calendar-alt"></
                            i> January 2015 - June 2017
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder">

                        </span>
                        <span className="qualification__line"></span>
                    </div>
                </div>
                
                <div className="qualification__data">
                        <div></div>
                        <div>
                        <span className="qualification__rounder">
                        </span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Ordinary Level </h3>
                        <span className="qualification__subtitle">Pearson Edexcel</span>
                        <div className="qualification__calender">
                            <i className="uil uil--calendar-alt"></
                            i> January 2014 - January 2015
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className={
                toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Technical Product Analyst</h3>
                        <span className="qualification__subtitle">The Guitar Center Company </span>
                        <div className="qualification__calender">
                            <i className="uil uil--calendar-alt"></
                            i> November 2023 - Present
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder">

                        </span>
                        <span className="qualification__line"></span>
                    </div>
                </div>
                
                <div className="qualification__data">
                        <div></div>
                        <div>
                        <span className="qualification__rounder">
                        </span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title"> Software Developer Co Op</h3>
                        <span className="qualification__subtitle">RoviSys CA</span>
                        <div className="qualification__calender">
                            <i className="uil uil--calendar-alt"></
                            i> July 2023 - October 2023
                        </div>
                    </div>
                    
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title"> Tech Intern</h3>
                        <span className="qualification__subtitle"> Kalamazoo Public Library</span>
                        <div className="qualification__calender">
                            <i className="uil uil--calendar-alt"></
                            i> September 2022- July 2022
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"> </span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                        <div></div>
                        <div>
                        <span className="qualification__rounder">
                        </span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title"> Helpdesk Technician</h3>
                        <span className="qualification__subtitle">Office of Information Technoloy <br/> 
                        @Western Michigan University</span>
                        <div className="qualification__calender">
                            <i className="uil uil--calendar-alt"></
                            i> Jan 2023 - July 2023
                        </div>
                    </div>
                    
                </div>
                
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title"> IT Analyst</h3>
                        <span className="qualification__subtitle"> Ibn Sina Tech Limited</span>
                        <div className="qualification__calender">
                            <i className="uil uil--calendar-alt"></
                            i>February 2020 - December 2020
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"> </span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                        <div></div>
                        <div>
                        <span className="qualification__rounder">
                        </span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title"> IT Support Analyst</h3>
                        <span className="qualification__subtitle">Perfect Power Limited</span>
                        <div className="qualification__calender">
                            <i className="uil uil--calendar-alt"></
                            i> March 2019 - November 2020
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section> 
  )
}

export default Qualification