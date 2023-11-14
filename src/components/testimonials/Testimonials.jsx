import React, { useState } from 'react';
import './testimonial.css';
import { Data } from './Data';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === Data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="testimonial container section" id='testimonials'>
      <h2 className="section__title">Testimonials</h2>
      <span className='section__subtitle'>How my co-workers see me!</span>
    
      <div className="testimonial__slider">
        <div 
          className="testimonial__slides" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Data.map(({ id, image, title, who, description }, index) => (
            <div 
              key={id} 
              className={`testimonial__slide ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="testimonial__card tweet-card">
                <div className="tweet-header">
                  <img src={image} alt="" className="tweet-avatar"/>
                  <div className="tweet-user-info">
                    <h3 className="tweet-name">{title}</h3>
                    <h4 className="tweet-handle">{who}</h4>
                  </div>
                </div>
                <p className="tweet-content">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="buttons">
        <button onClick={goToPrevious} className="testimonial__button testimonial__button--prev">&lt;</button>
        <button onClick={goToNext} className="testimonial__button testimonial__button--next">&gt;</button>
      </div>
    </section>
  );
};

export default Testimonials;
