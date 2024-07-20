import React from 'react'
import './Catagories.css'

function Catagories() {
  return (
    <div className="cat-wrapper">
        <div className="paddings innerWidth cat-container">
                <div className="cat-left-container">
                    <div className="cat-col">
                    <div className="cat-head"><span>What are you looking for?</span></div>
                    <div className="catagory-button">
                    <div className="cat-row">
                    <div className="cat-button">
                        <div className="button-image"><img src={require('../../images/catButton1.webp')} alt="" /></div>
                        <span>Women's Salon, Spa & Laser Clinic</span>
                    </div>
                    <div className="cat-button">
                        <div className="button-image"><img src={require('../../images/catButton2.webp')} alt="" /></div>
                        <span>Men's Salon & Massage</span>
                    </div>
                    <div className="cat-button">
                        <div className="button-image"><img src={require('../../images/catButton3.webp')} alt="" /></div>
                        <span>AC & Appliance Repair</span>
                    </div>
                    </div>
                    
                    <div className="cat-row">
                    <div className="cat-button">
                        <div className="button-image"><img src={require('../../images/catButton4.webp')} alt="" /></div>
                        <span>Cleaning</span>
                    </div>
                    <div className="cat-button">
                        <div className="button-image"><img src={require('../../images/catButton5.webp')} alt="" /></div>
                        <span>Electrician, Plumber & Carpenter</span>
                    </div>
                    <div className="cat-button">
                        <div className="button-image"><img src={require('../../images/catButton6.webp')} alt="" /></div>
                        <span>Native Water Purifier</span>
                    </div>
                    </div>

                    <div className="cat-row3">
                        <div className="cat-button"><div className="button-image"><span>Native Smart Locks</span><img src={require('../../images/catButton7.webp')} alt="" /></div></div>
                        <div className="cat-button"><div className="button-image"><span>Painting & Waterproofing</span><img src={require('../../images/catButton8.webp')} alt="" /></div></div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="cat-right">
                <span>We Can Make Your Place Sparkle.</span>
                <img src={require('../../images/catagories4.webp')} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Catagories
