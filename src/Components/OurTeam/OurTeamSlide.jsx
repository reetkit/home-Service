import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./OurTeam.css"

function OurTeam() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="ourTeam-wrapper">
    <div className='paddings innerWidth ourTeam-container'>
      <div className="ourTeam-Slider">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="ourTeamSlide">
            <div className='ourTeamSlideImage'>
              <img src={require(`../../images/${d.img}.jpg`)} alt="" />
            </div>

            <div className="ourTeam-textContainer">
              <p className="ourTeam-text">{d.name}</p>
              <p className="ourTeam-review">{d.review}</p>
              <button className='ourTeam-readMoreButton'>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
    </section>
  );
}

const data = [
  {
    name: `RatnaDwip Mitra`,
    img: `a`,
    review: `Maintenance Worker`
  },
  {
    name: `Ratul Biswas`,
    img: `b`,
    review: `Plumber`
  },
  {
    name: `Anirban Ghosh`,
    img: `c`,
    review: `Electrician`
  },
  {
    name: `Sujan Saha`,
    img: `d`,
    review: `Carpenter`
  },
  {
    name: `Ranajoy Paul`,
    img: `a`,
    review: `Painter`
  },
  
];

export default OurTeam;