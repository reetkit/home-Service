import React, { useState, useEffect } from 'react';
import './Blog.css'; // Import your CSS file


function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const slides = [
    { id:1, image: 'blog1.jpeg', heading: 'How to remove a coffee stain', date:'July 29, 2021' },
    { id:2, image: 'blog2.jpg', heading: 'Scrub the bathtub clean', date:'July 2, 2023' },
    { id:3, image: 'blog3.jpeg', heading: 'Fall in love with Cleaning', date:'July 9, 2020' },
    { id:4, image: 'blog1.jpeg', heading: 'How to remove a coffee stain', date:'June 29, 2022' },
    { id:5, image: 'blog2.jpg', heading: 'Scrub the bathtub clean', date:'May 2, 2021' },
    { id:6, image: 'blog3.jpeg', heading: 'Fall in love with Cleaning',date:"Aug 2, 2023" }
  ];

  useEffect(() => {
    setSlideWidth(document.querySelector('.slide').clientWidth);
    setContainerWidth(document.querySelector('.carousel-container').clientWidth);
  }, []);

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
    <div className="paddings innerWidth a">
        <div className="blogButton">
             <span className="blog-heading">LATEST BLOG</span>
             <span className="blog-desc">There Are Some Helpful Blogs For You.</span>
             <a href="/blogs">
             <button className="blog-button">View All Blog</button>
             </a>
        </div>
        <div className="carousel-envelope">
      <div className="carousel-container" style={{ maxWidth: containerWidth }}>
        <div className="carousel" style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}>
          {slides.map(item => (
            <div className="slide" key={item.id}>
              <img className="slideImage" src={require(`../../images/${item.image}`)} alt="" />
              <div className="blogSlideText">
                <span>{item.heading}</span>
                <span>{item.date}</span>
              </div>

            </div>
            
          ))}
        </div>
      </div>

      {/* <button className="prev" onClick={prevSlide} disabled={currentIndex === 0}>Prev</button>
      <button className="next" onClick={nextSlide} disabled={currentIndex === slides.length - 1}>Next</button> */}
        </div>
    </div>
  );
}

export default Carousel;
