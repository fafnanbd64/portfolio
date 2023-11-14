import React from 'react'
import { SiReact, SiVuedotjs, SiSpringboot, SiNodedotjs, SiRedux, SiPlayframework, SiHtml5, SiCss3, SiSass } from 'react-icons/si';

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title"> Web Dev and Frameworks</h3>
        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                <SiReact className="skills__icon" />
                    <div>
                        <h3 className="skills__name">React.js</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                <SiVuedotjs className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Vue.js</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                <SiSpringboot className="skills__icon" />
                    <div>
                        <h3 className="skills__name">SpringBoot</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                <SiNodedotjs className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Node.js</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                <SiRedux className="skills__icon" />
                    <div>
                        <h3 className="skills__name">Redux</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>


            <div className="skills__group">

                <div className="skills__data">
                <i class='bx bxs-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Play</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                <SiHtml5 className="skills__icon" />                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                <SiCss3 className="skills__icon" />
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                <SiSass className="skills__icon" />
                    <div>
                        <h3 className="skills__name">SASS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Backend