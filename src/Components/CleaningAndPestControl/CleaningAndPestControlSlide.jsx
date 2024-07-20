import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import"swiper/css"
import'./CleaningAndPestControlStyle.css'
import CleaningAndPestControlData from './CleaningAndPestControl.json'
import { sWSliderSettings } from '../../utils/commonService'
const CleaningAndPestControlSlide = () => {
  return (
    <div>
        <section className="cleaningAndPestControl-wrapper">
            <div className="paddings innerWidth cleaningAndPestControl-container">
                <div className="flexColStart cleaningAndPestControl-head">
                    <span className="primaryText">Salon for Women</span>
                </div>

                <Swiper {...sWSliderSettings}>
                    {/* <SWSliderButtons/> */}
                    {
                        CleaningAndPestControlData.map((CleaningAndPestControlcard,i)=>(
                            <SwiperSlide key={i}>
                                <div className="flexColStart cleaningAndPestControl-card">
                                    <span className="secondaryText">{CleaningAndPestControlcard.name}</span>
                                    <img src={require(`../../images/${CleaningAndPestControlcard.cpimageurl}.webp`)} alt=""/>
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
export default CleaningAndPestControlSlide

const SWSliderButtons= ()=> {
    const swiper = useSwiper();

  return (
    <div className='cleaningAndPestControl-button'>
        <button onClick={()=>swiper.slidePrev()}>&lt;</button>
        <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}