import React from 'react'
import { TiTickOutline } from "react-icons/ti";
import './About.css'

function About() {
  return (
    <>
        <div className="about-wrapper">
            <div className="paddings innerWidth about-container">
                <div className="aboutLeft">
                    <div className="aboutImage">
                        <img className='aboutImageSlide' src={require('../../images/a.jpg')} alt="" />
                    </div>
                </div>
                <div className='aboutRight'>
                        <div className="quoteAbout">
                            <h5>--About Us</h5>
                        </div>
                        <div className="aboutDescription">
                            <div className="titleAbout"><p className='aboutTextTitle'>Explore About Our Services & Quality</p></div>
                            <div className="description">
                                <div className="desc">
                                    <div className="descIcons"><TiTickOutline /></div>
                                    <div className="descText">Build Roof Standards</div>
                                </div>
                                <div className="desc">
                                    <div className="descIcons"><TiTickOutline /></div>
                                    <div className="descText">100% Satisfaction guarentee</div>
                                </div>
                                <div className="desc">
                                    <div className="descIcons"><TiTickOutline /></div>
                                    <div className="descText">50+ Successful Project done</div>
                                </div>
                                <div className="desc">
                                    <div className="descIcons"><TiTickOutline /></div>
                                    <div className="descText">Damage Roof Repair</div>
                                </div>
                                <div className="desc">
                                    <div className="descIcons"><TiTickOutline /></div>
                                    <div className="descText">Budget Friendly</div>
                                </div>
                            </div>
                            <div className="desc">
                                <div className="descIcons"><TiTickOutline /></div>
                                <div className="descText">Massage at doorstep</div>
                            </div>
                        </div>
                        <div className="forService"><p>for Services:</p></div>
                        <div className="serviceButton"><p>BOOK NOW</p></div>
                </div>  
            </div>

        </div>
    </>
  )
}

export default About
