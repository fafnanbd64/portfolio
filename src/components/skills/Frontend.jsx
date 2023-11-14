import React from 'react';
import { FaJava, FaPython, FaReact } from 'react-icons/fa'; // Importing specific icons
import { SiC, SiR, SiJavascript, SiTypescript, SiPhp, SiDart, SiSql, SiSwift, SiSqlite } from 'react-icons/si'; // Importing specific icons


const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Programming Language</h3>

        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                <FaJava className="skills__icon" />
                
                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                <FaPython className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                <SiC className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Prog Lang C</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                <SiR className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Prog Lang R</h3>
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
            </div>


            <div className="skills__group">

                <div className="skills__data">
                <SiTypescript className="skills__icon" /> 
                    <div>
                        <h3 className="skills__name">TypeScript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                <SiPhp className="skills__icon" />
                    <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                <SiDart className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Dart</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                <SiSqlite className="skills__icon" />
                
                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                <SiSwift className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Swift </h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Frontend