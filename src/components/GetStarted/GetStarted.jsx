import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
    return (
        <section className="g-wrapped">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className='primaryText'>Get Started with Homyz</span>
                    <span className='secondaryText'>
                        Subscribe to keep up to date with our listings.
                        <br />
                        Find your new home soon.
                    </span>
                    <button className="button">
                        <a href="mailto:dusingjake@gmail.com">Get Started</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GetStarted