import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import"swiper/css"
import'./MassageForMenStyle.css'
import MassageForMenData from './MassageForMen.json'
import { sWSliderSettings } from '../../utils/commonService'
const MassageForMenSlide = () => {
  return (
    <div>
        <section className="massageForMen-wrapper">
            <div className="paddings innerWidth massageForMen-container">
                <div className="flexColStart massageForMen-head">
                    <span className="primaryText">Salon for Women</span>
                </div>

                <Swiper {...sWSliderSettings}>
                    {/* <SWSliderButtons/> */}
                    {
                        MassageForMenData.map((MassageForMenDatacard,i)=>(
                            <SwiperSlide key={i}>
                                <div className="flexColStart massageForMen-card">
                                    <span className="secondaryText">{MassageForMenDatacard.name}</span>
                                    <img src={require(`../../images/${MassageForMenDatacard.mmimageurl}.webp`)} alt=""/>
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
export default MassageForMenSlide

const SWSliderButtons= ()=> {
    const swiper = useSwiper();

  return (
    <div className='massageForMen-button'>
        <button onClick={()=>swiper.slidePrev()}>&lt;</button>
        <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}