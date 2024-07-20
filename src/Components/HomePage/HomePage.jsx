import React from 'react'
import './HomePage.css'
import { TiStarOutline } from "react-icons/ti";
import { GoPeople } from "react-icons/go";

function HomePage() {
  return (
    <div>
      <section className="home-Wrapper">
        <div className="paddings innerWidth home-container">
        <div className="home-left">
            <div className="home-title">
                <h1>
                    Home services<br />
                    at your<br />
                    doorstep
                </h1>
            </div>
            <div className="home-description">
                <span className='secondaryText'>Lorem ipsum, dolor sit amet consectetur Reiciendis </span>
                <span className='secondaryText'>officiis unde,harum accusantium rerum quibusdam.</span>
                <span className='secondaryText'>ciis unde, harum accusantium rerum quibusdam</span>
            </div>
            <div className="home-iconDiv">
                <div className="home-rating">
                    <div className="icon-text">
                        <div className="star-icon">
                            <TiStarOutline />
                        </div>
                        <div className="count">
                            <span>4.8</span>
                        </div>
                    </div>
                    <div className="hom-desc">
                        <span>Service Rating</span>
                    </div>
                </div>
                <div className="global-customer">
                    <div className="icon-text">
                        <div className="icon">
                            <GoPeople />
                        </div>
                        <div className="count">
                            <span>5M+</span>
                        </div>
                    </div>
                    <div className="hom-desc">
                        <span>Customer Globally</span>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="home-right">
            <div className="homePageImage">
                <img className='homePageImageSlide' src={require('../../images/homeScreen1.jpg')} alt="" />
            </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
