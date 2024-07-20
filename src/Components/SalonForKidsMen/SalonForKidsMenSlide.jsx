import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import"swiper/css"
import'./SalonForKidsMenStyle.css'
import SalonForKidsMenData from './SalonForKidsMen.json'
import { sWSliderSettings } from '../../utils/commonService'
const SalonForKidsMenSlide = () => {
  return (
    <div>
        <section className="salonForKidsMen-wrapper">
            <div className="paddings innerWidth salonForKidsMen-container">
                <div className="flexColStart salonForKidsMen-head">
                    <span className="primaryText">Salon for Women</span>
                </div>

                <Swiper {...sWSliderSettings}>
                    {/* <SWSliderButtons/> */}
                    {
                        SalonForKidsMenData.map((SalonForKidsMencard,i)=>(
                            <SwiperSlide key={i}>
                                <div className="flexColStart salonForKidsMen-card">
                                    <span className="secondaryText">{SalonForKidsMencard.name}</span>
                                    <img src={require(`../../images/${SalonForKidsMencard.cpimageurl}.webp`)} alt=""/>
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
export default SalonForKidsMenSlide

const SWSliderButtons= ()=> {
    const swiper = useSwiper();

  return (
    <div className='salonForKidsMen-button'>
        <button onClick={()=>swiper.slidePrev()}>&lt;</button>
        <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}