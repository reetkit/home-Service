import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import"swiper/css"
import'./ACApplience.css'
import productData from '../ACApplience/ACAndApplience.json'
import { sWSliderSettings } from '../../utils/commonService'
const ACApplienceslide = () => {
  return (
    <div>
        <section className="acaplience-wrapper">
            <div className="paddings innerWidth acaplience-container">
                <div className="flexColStart acaplience-head">
                    <span className="primaryText">Salon for Women</span>
                </div>

                <Swiper {...sWSliderSettings}>
                    <SWSliderButtons/>
                    {
                        productData.map((card,i)=>(
                            <SwiperSlide key={i}>
                                <div className="flexColStart acaplience-card">
                                    <span className="secondaryText">{card.name}</span>
                                    <img src={require(`../../images/${card.imageurl}.webp`)} alt=""/>
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
export default ACApplienceslide

const SWSliderButtons= ()=> {
    const swiper = useSwiper();

  return (
    <div className='acaplience-button'>
        <button onClick={()=>swiper.slidePrev()}>&lt;</button>
        <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}
