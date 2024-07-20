import TopSlider from '../../Components/topSlider/TopSlider'
import SalonWomen from '../../Components/SalonWomen/SalonWomen';
import ACApplienceslide from '../../Components/ACApplience/ACApplienceslide';
import SpaForWomenSlide from '../../Components/SpaForWomen/SpaForWomenSlide';
import CleaningAndPestControlSlide from '../../Components/CleaningAndPestControl/CleaningAndPestControlSlide';
import MassageForMenSlide from '../../Components/MasssageForMen/MassageForMenSlide';
import SalonForKidsMenSlide from '../../Components/SalonForKidsMen/SalonForKidsMenSlide';
import QuickHomeRepairsSlide from '../../Components/QuickHomeRepairs/QuickHomeRepairsSlide';
import MostBookedServicesSlide from '../../Components/mostBookedServices/MostBookedServicesSlide';
import HomePage from '../../Components/HomePage/HomePage';
import Footer from '../../Components/Footer/Footer';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Navbar from '../../Components/NavBar/NavBar';
import Catagories from '../../Components/Catagories/Catagories';
import OurTeam from '../../Components/OurTeam/OurTeamSlide';
import Blog from '../../Components/Blog/Blog';
import Testimonial from '../../Components/Testimonial/Testimonial';
import About from '../../Components/About/About';

import React from 'react'

function RoutePage() {
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <HomePage/>
      <Catagories/>
      <TopSlider/>
      <MostBookedServicesSlide/>
      <MassageForMenSlide/>
      <SalonWomen/>
      <CleaningAndPestControlSlide/>
      <QuickHomeRepairsSlide/>
      <SpaForWomenSlide/> 
      <ACApplienceslide/>
      <SalonForKidsMenSlide/>
      <Testimonial/>
      <About/>
      <OurTeam/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default RoutePage
