import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import"swiper/css"
import'./TopSlider.css'
import data from "../../utils/slider.json"
import { sliderSettings } from '../../utils/common'

function TopSlider() {
  return (
    <section className="t-wrapper">
        <div className="paddings innerWidth flexCenter t-container">
        <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    data.map((card,i)=>(
                        <SwiperSlide key={i}>
                            <div className="flexCenter t-card">
                                <img src={require(`../../images/${card.image}.webp`)} alt="home"/>
                            </div>
                        </SwiperSlide>
                    ))
                } 
        </Swiper> 
        </div>
    </section>
  )
}

export default TopSlider

const SliderButtons= ()=> {
    const swiper = useSwiper();

  return (
    <div className='t-button'>
        <button onClick={()=>swiper.slidePrev()}>&lt;</button><button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}