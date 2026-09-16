import React, { useState } from 'react';
import "./services.css";

const companies = [
    {
        id: 1,
        cls: 'company1',
        title: 'Technical Product Analyst',
        org: 'The Guitar Center',
        period: 'November 2023 – Present',
        bullets: [
            'Led site analytics, online marketing campaigns, and merchandising strategies across a $2B ecommerce channel — driving data-driven decisions with Adobe Analytics and SQL.',
            'Built and maintained dbt pipelines on Snowflake, enabling self-serve reporting and A/B test analysis for product and marketing teams.',
            'Proficient in Adobe Analytics, Adobe Launch, Amplitude, dbt, Snowflake, and Excel.',
        ],
    },
    {
        id: 2,
        cls: 'company2',
        title: 'Software Developer Co-Op',
        org: 'RoviSys',
        period: 'July 2023 – November 2023',
        bullets: [
            'Engineered internal applications for systems engineers and information system specialists in the industrial automation sector.',
            'Explored PI systems and servers for data point extraction, enabling analysis of parameters across multiple vertical markets.',
        ],
    },
    {
        id: 3,
        cls: 'company3',
        title: 'Tech Intern',
        org: 'Kalamazoo Public Library',
        period: 'September 2022 – July 2023',
        bullets: [
            'Deployed an Order Management System for the Idea Lab from ideation to post-implementation, improving digital user experience.',
            'Leveraged Adobe Analytics for data-driven insights across library digital platforms.',
        ],
    },
    {
        id: 4,
        cls: 'company4',
        title: 'Helpdesk Technician',
        org: 'OIT @ Western Michigan University',
        period: 'January 2023 – July 2023',
        bullets: [
            'Analyzed data and identified patterns to resolve technical challenges, improving digital experiences for students and faculty.',
            'Tracked and reported issues via Jira, maintaining best-practice IT service workflows.',
        ],
    },
    {
        id: 5,
        cls: 'company5',
        title: 'IT Support Analyst',
        org: 'Perfect Power Limited',
        period: 'March 2019 – November 2020',
        bullets: [
            'Designed electrical layouts using Illustrator and formatted technical bids using LaTeX.',
            'Set up cloud software and resolved infrastructure issues with minimal downtime.',
        ],
    },
    {
        id: 6,
        cls: 'company6',
        title: 'IT Analyst',
        org: 'Ibn Sina Tech Limited',
        period: 'February 2020 – December 2020',
        bullets: [
            'Root-cause analysis of sluggish system performance — hardware upgrade recommendation led to a 40% improvement.',
            'Oversaw CRM system implementation on schedule and under budget, increasing customer satisfaction by 25%.',
        ],
    },
];

const Services = () => {
    const [active, setActive] = useState(null);

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Where I've Worked</h2>
            <span className="section__subtitle">companies that shaped me</span>

            <div className="services__container container grid">
                {companies.map((c) => (
                    <div key={c.id} className={`services_content ${c.cls}`}>
                        <div className="service__overlay">
                            <span className="service__period">{c.period}</span>
                            <h3 className="services__title">
                                {c.title}<br />
                                <span className="service__org">@{c.org}</span>
                            </h3>
                            <span
                                className="services__button"
                                onClick={() => setActive(c.id)}
                            >
                                Read More
                                <i className="uil uil-arrow-right services__button-icon"></i>
                            </span>
                        </div>

                        {active === c.id && (
                            <div className="services__modal active-modal" onClick={() => setActive(null)}>
                                <div className="services__modal-content" onClick={(e) => e.stopPropagation()}>
                                    <i
                                        className="uil uil-times services__modal-close"
                                        onClick={() => setActive(null)}
                                    ></i>
                                    <span className="services__modal-period">{c.period}</span>
                                    <h3 className="services__modal-title">{c.title}</h3>
                                    <p className="services__modal-org">@{c.org}</p>
                                    <ul className="services__modal-services grid">
                                        {c.bullets.map((b, i) => (
                                            <li key={i} className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="services__modal-info">{b}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
