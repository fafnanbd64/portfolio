import React, { useState, useEffect } from 'react';
import { getPhotos } from '../../utils/fotoDB';
import './fotografia-teaser.css';

const FotografiaTeaser = ({ onOpen }) => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getPhotos()
            .then(data => setPhotos(data.slice(0, 6).map(p => ({ ...p, url: p.image_url }))))
            .catch(() => setPhotos([]));
    }, []);

    const cells = Array.from({ length: 6 });

    return (
        <section className="foto-teaser section" id="life">
            <h2 className="section__title">La Fotographia</h2>
            <span className="section__subtitle">life through the lens</span>

            <div className="foto-teaser__body container">
                <div className="foto-teaser__grid">
                    {cells.map((_, i) => {
                        const photo = photos[i];
                        return (
                            <div
                                key={i}
                                className={`foto-teaser__cell ${photo ? 'foto-teaser__cell--filled' : 'foto-teaser__cell--empty'}`}
                                onClick={onOpen}
                            >
                                {photo ? (
                                    <>
                                        <img src={photo.url} alt={photo.title} className="foto-teaser__img" />
                                        <div className="foto-teaser__overlay">
                                            <span className="foto-teaser__cell-title">{photo.title}</span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="foto-teaser__placeholder">
                                        <i className="uil uil-image-plus"></i>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="foto-teaser__cta">
                    <p className="foto-teaser__desc">
                        A collection of moments — places visited, frames captured, memories kept.
                    </p>
                    <button className="foto-teaser__btn" onClick={onOpen}>
                        <span>View all photographs</span>
                        <i className="uil uil-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FotografiaTeaser;
