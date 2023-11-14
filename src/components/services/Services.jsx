import React from 'react';
import { useState } from 'react';
import "./services.css";


const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title"> Experiences</h2>
        <span className="section__subtitle"> Details about some amazing places I have worked at. </span>
        
        <div className="services__container container grid">

            <div className="services_content company1">
                    <div className='service__white'>
                        <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Technical Product Analyst <br/>@The Guitar Center 
                        </h3>
                    </div>

                    <span className="services__button" onClick={() =>
                    toggleTab(1)}>Read More 
                    <i className="uil uil-arrow-right services__button-icon">
                        </i></span>
                    </div>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"> Technical Product Analyst @The Guitar Center</h3>
                            <p className="services__modal-description">
                                November 2023 - Present
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Drove strategic ecommerce initiatives at Guitar Center,
                                     leading site analytics, online marketing campaigns, 
                                     and merchandising strategies, significantly enhancing 
                                     data-driven decision-making and stakeholder engagement </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Expertly mined and analyzed data,
                                     providing pivotal insights to internal teams, 
                                     optimizing digital marketing strategies, and 
                                     ensuring effective reporting and governance in 
                                     line with best practices in digital analytics.
                                     </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Proficient in Adobe Analytics, Adobe Launch, Excel, and SQL with over two years of experience in online marketing</p>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="services_content company2">
                
                <div className='service__white'>
                    <div>
                        
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Software Developer CoOp <br/> @RoviSys </h3>
                    </div>

                    <span className="services__button" onClick={() =>
                    toggleTab(2)}>
                        Read More 
                    <i className="uil uil-arrow-right services__button-icon">
                        </i>
                    </span>
                </div>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Software Developer CoOp <br/> - RoviSys </h3>
                            <p className="services__modal-description">
                                July 2023 - November 2023
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    At RoviSys, I engineered internal applications <br/> specifically for systems engineers 
                                    and information system specialists, significantly bolstering <br/> business operations in
                                    the automation industry by streamlining processes, enhancing efficiency, and optimizing system performance for our dynamic team.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Delved into PI systems and explored servers for data point extraction, 
                                    a pivotal venture that broadened our understanding
                                    of machines in the automation sector. This enabled thorough 
                                    analysis of various parameters across multiple vertical markets, 
                                    driving valuable business insights and efficiencies.
                                    </p>
                                </li>
                              
                            </ul>
                        </div>
                </div>
            </div>
            <div className="services_content company3">
                <div className='service__white'>
                    <div >
                    <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title"> Tech Intern
                                <br/>@Kalamazoo Public Library
                        </h3>
                    </div>

                    <span className="services__button" onClick={() =>
                    toggleTab(3)}>Read More 
                    <i className="uil uil-arrow-right services__button-icon">
                        </i></span>
                </div>


                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Tech Intern - Kalamazoo Public Library</h3>
                            <p className="services__modal-description">
                                September 2022 - July 2023 
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       Led the development of custom ecommerce platforms, 
                                       aligning with Digital Merchandising. Utilized Adobe Analytics for data-driven insights, enhancing online marketing strategies and adhering to best practices.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Managed a pivotal IT solution from ideation to post-implementation, 
                                    deploying an Order Management System for Idea Lab. This showcased a commitment to optimizing digital user experiences and promoting seamless system integrations.
                                    </p>
                                </li>

                      
                            </ul>
                        </div>
                    </div>
            </div>

          
        </div>

        <br/> 
        <br/>

        <div className="services__container container grid">

            <div className="services_content company4">
                    <div className='service__white'>
                        <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Helpdesk  Technician <br/>@OIT, WMU 
                        </h3>
                    </div>

                    <span className="services__button" onClick={() =>
                    toggleTab(4)}>Read More 
                    <i className="uil uil-arrow-right services__button-icon">
                        </i></span>
                    </div>
                    <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"> Helpdesk Technican - Office of Information Technology @Western Michigan University</h3>
                            <p className="services__modal-description">
                                January 2023 - July 2023
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                     Utilized analytical prowess to analyze data, identify patterns, 
                                     and efficiently resolve technical challenges, fostering streamlined 
                                     communications across departments and improving digital experiences for users                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Employed strong communication skills to elucidate intricate IT solutions, 
                                    accelerating resolution times and enhancing user satisfaction. 
                                    Ensured robust reporting and tracking of issues through tools like Jira, 
                                    aligning with best practices and methodologies.                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Leveraged web-based applications to analyze data and 
                                    server technologies, driving insights and fostering
                                    departmental collaboration. This approach ensured robust 
                                    reporting, enhanced digital experience, and improved service 
                                    for students and faculty.                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="services_content">
                <div className='service__white'>
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">IT Support Analyst <br/> @Perfect Power  </h3>
                    </div>

                    <span className="services__button" onClick={() =>
                    toggleTab(5)}>
                        Read More 
                    <i className="uil uil-arrow-right services__button-icon">
                        </i>
                    </span>
                </div>

                    <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">IT Support Analyst <br/> @Perfect Power </h3>
                            <p className="services__modal-description">
                                March 2019 - November 2020
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Provided solutions in designing electrical layouts using Illustrator, helping
in formatting bids for future projects using Latex for showcasing complex Mathematical solutions                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Helped others with setting up relevant cloud software and resolved issues
taking minimal time
                                    </p>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="services_content company6">
                <div className='service__white'>
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">IT Analyst <br/>@Ibn Sina Tech Limited
                                
                        </h3>
                    </div>

                    <span className="services__button" onClick={() =>
                    toggleTab(6)}>Read More 
                    <i className="uil uil-arrow-right services__button-icon">
                        </i></span>
                </div>

                <div className={toggleState === 6 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">IT Analyst @Ibn Sina Tech Limited</h3>
                            <p className="services__modal-description">
                             Feb 2020 - December 2020 
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    At Ibn Sina, I discovered a persistent problem with sluggish system performance, carried out a root cause analysis, and suggested upgrading the hardware, which led to a 40% improvement in system performance. I also wrote user-friendly manuals to stop the problem from happening again
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Oversaw a project at Ibn Sina to put in place a new CRM system, working closely with stakeholders to make sure it was completed on schedule and within budget. The new method led to a 10% rise in revenue and a 25% improvement in customer satisfaction ratings.                                    </p>
                                </li>

                                
                            </ul>
                        </div>
                </div>
            </div>

            
        </div>


    </section>
  )
}

export default Services