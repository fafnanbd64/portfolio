import React from 'react'
import './data.css';
 
const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title"> 
            Fariz Kamal 
            🚀
            
        </h1>
        <h3 className="home__subtitle"> Analytics Engineer</h3>
        <p className="home__description">
        Analytics Engineer with 2+ years owning end-to-end data workflows — from event instrumentation and A/B testing at Guitar Center to building dbt pipelines on Snowflake. Passionate about building the data infrastructure that helps honest, consumer-first fintech products grow intelligently. Based in Los Angeles, CA.
        <br/>
        <br/>

        🎓 Graduated in August 2023.
        <br/>
        🏎️ Huge Formula1 Fanatic and soccer head- Go Liverpool!
        <br/>
        💵  Would love a chat to build the next big unicorn over a coffee or a fifa match.



        </p>
        <a href="#contact" className="button button--flex">
            Connect 
            <span class="f1-car-emoji">📟</span>


            
        </a>
    </div>
  )
}

export default Data