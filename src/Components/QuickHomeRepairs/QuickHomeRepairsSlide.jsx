import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import"swiper/css"
import'./QuickHomeRepairsStyle.css'
import QuickHomeRepairsData from './QuickHomeRepairs.json'
import { sWSliderSettings } from '../../utils/commonService'
import { FaStar } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";
const QuickHomeRepairsSlide = () => {
  return (
    <div>
        <section className="quickHomeRepairs-wrapper">
            <div className="paddings innerWidth quickHomeRepairs-container">
                <div className="flexColStart quickHomeRepairs-head">
                    <span className="primaryText">Salon for Women</span>
                </div>

                <Swiper {...sWSliderSettings}>
                    <SWSliderButtons/>
                    {
                        QuickHomeRepairsData.map((QuickHomeRepairscard,i)=>(
                            <SwiperSlide key={i}>
                                <div className="qRContainer">
                                <div className="flexStart quickHomeRepairs-card">
                                    <div className="imageDiv">
                                        <img src={require(`../../images/${QuickHomeRepairscard.hrimageurl}.webp`)} alt=""/>
                                    </div>
                                    <span className='quickHomeRepair-text'>
                                        <span className="serviceName">{QuickHomeRepairscard.name}</span>
                                        <span className='flexStart'>
                                            <FaStar/>
                                            <span className="secondaryText rating">{QuickHomeRepairscard.rating}</span>
                                            <span className="secondaryText totalRating">({QuickHomeRepairscard.totalRating})</span>
                                        </span>
                                        <span className="flexStart">
                                            <BsCurrencyRupee />
                                            <span className="secondaryText price">{QuickHomeRepairscard.price}</span>
                                        </span>
                                        
                                    </span>
                                    
                                </div>
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
export default QuickHomeRepairsSlide

const SWSliderButtons= ()=> {
    const swiper = useSwiper();

  return (
    <div className='quickHomeRepairs-button'>
        <button onClick={()=>swiper.slidePrev()}>&lt;</button>
        <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}