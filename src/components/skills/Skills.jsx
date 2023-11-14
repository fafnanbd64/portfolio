import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import ProjManag from './ProjManag';
import Misc from './Misc';

const Skills = () => {
  return (
    <section className="skills__section" id="skills">
        <h2 className="section__title"> Skills</h2>
        <span className="section__subtitle">Technical Capacity</span>

        <div className="skills__container container grid">
            <Frontend/>
            <Backend/>
            <ProjManag></ProjManag>
            <Misc> </Misc>

        </div>
    </section>
    
  )
}

export default Skills