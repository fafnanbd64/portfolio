import React, { useState } from 'react';
import './memories.css';

/*
  HOW TO ADD PHOTOS:
  1. Drop your image files into src/assets/memories/
  2. Import them at the top:  import img1 from '../../assets/memories/photo1.jpg';
  3. Replace the `placeholder` field with the imported image variable.
  4. Fill in title, date, location, and emoji as you like.
*/

const memories = [
    {
        id: 1,
        placeholder: null,
        gradient: 'linear-gradient(135deg, #1a2a1a 0%, #0d1f0d 100%)',
        title: 'LA life',
        date: 'Nov 2023',
        location: 'Los Angeles, CA',
        emoji: '🌴',
    },
    {
        id: 2,
        placeholder: null,
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #0d0d1f 100%)',
        title: 'Race weekend',
        date: 'May 2024',
        location: 'Circuit de Monaco',
        emoji: '🏎️',
    },
    {
        id: 3,
        placeholder: null,
        gradient: 'linear-gradient(135deg, #2a1a1a 0%, #1f0d0d 100%)',
        title: 'Anfield',
        date: 'Dec 2023',
        location: 'Liverpool, UK',
        emoji: '⚽',
    },
    {
        id: 4,
        placeholder: null,
        gradient: 'linear-gradient(135deg, #1a2228 0%, #0d1a1f 100%)',
        title: 'Michigan days',
        date: 'Aug 2023',
        location: 'Kalamazoo, MI',
        emoji: '🎓',
    },
    {
        id: 5,
        placeholder: null,
        gradient: 'linear-gradient(135deg, #28221a 0%, #1f180d 100%)',
        title: 'Coffee & code',
        date: 'Jan 2024',
        location: 'Los Angeles, CA',
        emoji: '☕',
    },
    {
        id: 6,
        placeholder: null,
        gradient: 'linear-gradient(135deg, #1a1a1a 0%, #111 100%)',
        title: 'Golden hour',
        date: 'Mar 2024',
        location: 'Santa Monica, CA',
        emoji: '🌅',
    },
];

const Memories = () => {
    const [active, setActive] = useState(null);

    return (
        <section className="memories section" id="memories">
            <h2 className="section__title">Life in Frames</h2>
            <span className="section__subtitle">memories · places · moments</span>

            <div className="memories__grid container">
                {memories.map((mem) => (
                    <div
                        key={mem.id}
                        className={`memory__cell ${active === mem.id ? 'memory__cell--active' : ''}`}
                        style={{
                            background: mem.placeholder ? `url(${mem.placeholder}) center/cover no-repeat` : mem.gradient,
                        }}
                        onClick={() => setActive(active === mem.id ? null : mem.id)}
                    >
                        {/* Placeholder icon shown until a real photo is added */}
                        {!mem.placeholder && (
                            <div className="memory__placeholder-icon">
                                <span>{mem.emoji}</span>
                            </div>
                        )}

                        <div className="memory__overlay">
                            <div className="memory__meta">
                                <span className="memory__emoji">{mem.emoji}</span>
                                <h3 className="memory__title">{mem.title}</h3>
                                <div className="memory__details">
                                    <span className="memory__location">
                                        <i className="uil uil-location-pin-alt"></i>
                                        {mem.location}
                                    </span>
                                    <span className="memory__date">
                                        <i className="uil uil-calendar-alt"></i>
                                        {mem.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <p className="memories__hint">
                <i className="uil uil-image-plus"></i>
                Tap a frame to peek · photos coming soon
            </p>
        </section>
    );
};

export default Memories;
