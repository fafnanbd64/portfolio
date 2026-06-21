import React from 'react';
import { FaPython } from 'react-icons/fa';
import { SiC, SiJavascript, SiTypescript, SiSqlite } from 'react-icons/si';


const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Programming Language</h3>

        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                <FaPython className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                <SiJavascript className="skills__icon" />
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                <SiTypescript className="skills__icon" />
                    <div>
                        <h3 className="skills__name">TypeScript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

            </div>


            <div className="skills__group">

                <div className="skills__data">
                <SiSqlite className="skills__icon" />

                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                <SiC className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Prog Lang C</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Frontend
