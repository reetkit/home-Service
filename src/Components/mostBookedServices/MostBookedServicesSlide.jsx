import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import"swiper/css"
import'./MostBookedServices.css'
import MostBookedServicesData from './MostBookedServices.json'
import { sWSliderSettings } from '../../utils/commonService'
import { FaStar } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";
const MostBookedServicesSlide = () => {
  return (
    <div>
        <section className="mostBookedServices-wrapper">
            <div className="paddings innerWidth mostBookedServices-container">
                <div className="flexColStart mostBookedServices-head">
                    <span className="primaryText">Salon for Women</span>
                </div>

                <Swiper {...sWSliderSettings}>
                    <SWSliderButtons/>
                    {
                        MostBookedServicesData.map((MostBookedServicescard,i)=>(
                            <SwiperSlide key={i}>
                                <div className="flexStart mostBookedServices-card">
                                    <div className="imageDiv">
                                        <img src={require(`../../images/${MostBookedServicescard.mbsimageurl}.webp`)} alt=""/>
                                    </div>
                                    <span className='mostBookedServices-text'>
                                        <span className="serviceName">{MostBookedServicescard.name}</span>
                                        <span className='flexStart'>
                                            <FaStar/>
                                            <span className="secondaryText rating">{MostBookedServicescard.rating}</span>
                                            <span className="secondaryText totalRating">({MostBookedServicescard.totalRating})</span>
                                        </span>
                                        <span className="flexStart">
                                            <BsCurrencyRupee />
                                            <span className="secondaryText price">{MostBookedServicescard.price}</span>
                                        </span>
                                        
                                    </span>
                                    
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
export default MostBookedServicesSlide

const SWSliderButtons= ()=> {
    const swiper = useSwiper();

  return (
    <div className='mostBookedServices-button'>
        <button onClick={()=>swiper.slidePrev()}>&lt;</button>
        <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}