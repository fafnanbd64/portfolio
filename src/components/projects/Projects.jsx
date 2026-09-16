import React from 'react';
import './projects.css';

const projectData = [
    {
        title: 'Guitar Center Analytics Platform',
        description:
            'End-to-end analytics stack — event instrumentation with Amplitude, A/B testing infrastructure, and dbt pipelines on Snowflake powering merchandising and marketing decisions for a $2B retailer.',
        tags: ['dbt', 'Snowflake', 'Amplitude', 'Python', 'SQL'],
        link: null,
        github: null,
        status: 'Production',
    },
    {
        title: 'Portfolio Website',
        description:
            'This site — a React app deployed on GitHub Pages. Dark minimal design with a photo memories grid, experience timeline, and contact form wired to EmailJS.',
        tags: ['React', 'CSS', 'GitHub Pages', 'EmailJS'],
        link: 'https://fafnanbd64.github.io/farizkamal-portfolio/',
        github: 'https://github.com/fafnanbd64/farizkamal-portfolio',
        status: 'Live',
    },
    {
        title: 'Event Tracking Framework',
        description:
            'Designed and implemented a standardized event taxonomy and tracking framework to capture user behavior across web and mobile surfaces, enabling self-serve A/B analysis for product teams.',
        tags: ['Analytics Engineering', 'Amplitude', 'TypeScript', 'Data Governance'],
        link: null,
        github: null,
        status: 'Production',
    },
];

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Things I've built</span>

            <div className="projects__container container">
                {projectData.map((project, i) => (
                    <div className="project__card" key={i}>
                        <div className="project__header">
                            <div className="project__icon">
                                <i className="uil uil-folder-open"></i>
                            </div>
                            <div className="project__links">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="project__link-icon" title="GitHub">
                                        <i className="uil uil-github-alt"></i>
                                    </a>
                                )}
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="project__link-icon" title="Live">
                                        <i className="uil uil-external-link-alt"></i>
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="project__body">
                            <span className="project__status">{project.status}</span>
                            <h3 className="project__title">{project.title}</h3>
                            <p className="project__description">{project.description}</p>
                        </div>

                        <div className="project__tags">
                            {project.tags.map((tag, j) => (
                                <span className="project__tag" key={j}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
