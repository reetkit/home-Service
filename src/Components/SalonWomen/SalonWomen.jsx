import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import"swiper/css"
import'./SalonWomen.css'
import swdata from '../../utils/SalonWomenSlider.json'
import { sWSliderSettings } from '../../utils/commonService'
const SalonWomen = () => {
  return (
    <div>
        <section className="sw-wrapper">
            <div className="paddings innerWidth sw-container">
                <div className="flexColStart sw-head">
                    <span className="primaryText">Salon for Women</span>
                </div>

                <Swiper {...sWSliderSettings}>
                    <SWSliderButtons/>
                    {
                        swdata.map((card,i)=>(
                            <SwiperSlide key={i}>
                                <div className="flexColStart sw-card">
                                    <span className="secondaryText">{card.desc}</span>
                                    <img src={require(`../../images/${card.swimage}.webp`)} alt=""/>
                                </div>
                            </SwiperSlide>
                        ))
                    } 
                </Swiper>    
            </div>    
        </section> 
    </div>
  )
}
export default SalonWomen

const SWSliderButtons= ()=> {
    const swiper = useSwiper();

  return (
    <div className='sw-button'>
        <button onClick={()=>swiper.slidePrev()}>&lt;</button>
        <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}

