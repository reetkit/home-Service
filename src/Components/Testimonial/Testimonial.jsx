import React, { useState, useEffect } from 'react';
import './Testimonial.css'; // Import your CSS file


function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const slides = [
    { id:1, image: 'blog1.jpeg', name: 'Ankit Saha', position: 'Founder', desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy " },
    { id:2, image: 'blog2.jpg', name: 'Reet Saha', position: 'Co-Founder', desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy " },
    { id:3, image: 'blog3.jpeg', name: 'Anirban Ghosh', position: 'Marketing Head', desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy " },
    { id:4, image: 'blog1.jpeg', name: 'Ratnadwip Mitra', position: 'Client Management Head', desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy " },
    { id:5, image: 'blog2.jpg',name: 'Sujan Saha', position: 'Account Head', desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy " },
    { id:6, image: 'blog3.jpeg', name: 'Ranajoy Paul', position: 'Worker Manager', desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy " },
  ];

  function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;
    setCurrentIndex(index);
  }

  function nextSlide() {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <div className="wrapper">
    <div className="innerWidth testimonial-wrapper">
    <div className="paddings innerWidth d">
    <div className="testimonial-envelope">
      <div className="testimonial-container">
        <div className="testimonial-carousel" style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}>
          {slides.map(item => (
            <div className="testimonial-slide" key={item.id}>
              <div className="testimonialSlideImage"><img className="testimonial-slideImage" src={require(`../../images/${item.image}`)} alt="" /></div> 
              <div className="testimonial-textContainer">
                <p className="testimonial-name">{item.name}</p>
                <p className="testimonial-position">{item.position}</p>
                <p className="testimonial-desc">{item.desc}</p>
                <button className='testimonial-readMoreButton'>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="transparent">
      <span className="testimonial-heading">--Our Testimonial</span>
      <span className="testimonial-largeText">Customers Love What We Do</span>
      <p className="testimonial-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
    </div>
    </div>
    <div className="nonTransparent">
      <img src={require('../../images/testimonialBacgroundContainer.jpg')} alt="" />
    </div>
    </div>
    </div>
  );
}

export default Testimonial;
