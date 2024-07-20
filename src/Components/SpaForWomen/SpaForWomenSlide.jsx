import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import"swiper/css"
import'./SpaForWomenStyle.css'
import spaForWomenData from './SpaForWomen.json'
import { sWSliderSettings } from '../../utils/commonService'
const SpaForWomenSlide = () => {
  return (
    <div>
        <section className="spaForWomen-wrapper">
            <div className="paddings innerWidth spaForWomen-container">
                <div className="flexColStart spaForWomen-head">
                    <span className="primaryText">Salon for Women</span>
                </div>

                <Swiper {...sWSliderSettings}>
                    {/* <SWSliderButtons/> */}
                    {
                        spaForWomenData.map((spaForWomencard,i)=>(
                            <SwiperSlide key={i}>
                                <div className="flexColStart spaForWomen-card">
                                    <span className="secondaryText">{spaForWomencard.desc}</span>
                                    <img src={require(`../../images/${spaForWomencard.swimage}.webp`)} alt=""/>
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
export default SpaForWomenSlide

const SWSliderButtons= ()=> {
    const swiper = useSwiper();

  return (
    <div className='spaForWomen-button'>
        <button onClick={()=>swiper.slidePrev()}>&lt;</button>
        <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}