import React from 'react'
import "./Hero.css"
import card1img from "../../images/priyakumari.webp";
import volkswagen from "../../images/volkswagen.webp";
import card2img from "../../images/ravishankarkumar.webp";
import jio from "../../images/jio.webp";
import vinayshaw from "../../images/vinayshaw.webp";
import accenture from "../../images/accenture.webp";
import card4img from "../../images/pragyakta.webp";
import campgemini from "../../images/capgemini.webp";
import card5img from "../../images/jaykumarjaviya.webp";
import atlassian from "../../images/atlassian.webp";
import card6img from "../../images/nitinmishra.webp";
import nagarro from "../../images/nagarro.webp";
import card7img from "../../images/triptijha.webp";
import card8img from "../../images/satyanshshukla.webp";
import accolite from "../../images/accolite.webp";
//Importing slick slider from react
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowDown } from "react-icons/fa6";
const Hero = () => {
  const heroCards = [
    {
      name: "Priya Kumari",
      preCodingShuttle: "Quest Software",
      profile:card1img,
      company:volkswagen,
      role:"Sr.Software Engineer"
    },
    {
      name: "Ravi Shankar Kumar",
      preCodingShuttle: "Tier 3 College",
      profile: card2img,
      company: jio,
      role:"Software Engineer"
    },
    {
      name: "Vinay Shaw",
      preCodingShuttle: "Digiboxx",
      profile:vinayshaw,
      company: accenture,
      role:"Software Engineer"
    },
    {
      name: "Pragyakta Singh",
      preCodingShuttle: "Tier 3 College",
      profile: card4img,
      company: campgemini,
      role:"Software Engineer"
    },
    {
      name: "Jaykumar Javiya",
      preCodingShuttle: "Amdocs",
      profile: card5img,
      company: atlassian,
      role:"Sr.Software Engineer"
    },
    {
      name: "Nitin Mishra",
      preCodingShuttle: "BCA at LU",
      profile: card6img,
      company: nagarro,
      role:"Associate Engineer"
    },
    {
      name: "Tripti Jha",
      preCodingShuttle: "TCS",
      profile: card7img,
      company:accenture,
      role:"Software Engineer"
    },
    {
      name: "Satyansh Shukla",
      preCodingShuttle: "HCL Tech",
      profile: card8img,
      company: accolite,
      role:"Sr.Software Engineer"
    }    
  ]

  const settings = {
    infinite: true,
    dots: false,
    arrows:false,
    speed: 1500,
    slidesToShow:2,
    autoplay:true,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint:1200,
        settings: {
        slidesToShow:1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
        swipeToSlide: true,
        }
      }
      ]
  };

  return (
    <>
    <div className='hero-section'>
      <div className="hero-left">
        <div className="hero-detail">
           <h2 className="hero-heading">DSA Prime 2.0 is Open for Enrollments</h2>
              <p className='gray-color'>A Program to make you Job Ready for your Dream Company 🚀</p>
              <div>
                <button>Enroll Now</button>
              </div>
              <p className="para-color">This batch starts from <span className='font-semibold'>10 March</span></p>
              <div className="hero-container">
                  <div className="hero-container-left">
                      <h2 className='hero-container-heading'>1400+</h2>
                      <p className='para-color font-hero-container'>Success Stories</p>
                  </div>
                  <div className="hero-container-mid">
                      <h2 className='hero-container-heading'>250+</h2>   
                      <p className='para-color font-hero-container'>Companies Hired</p>
                  </div>
                  <div className="hero-container-right">
                      <h2 className='hero-container-heading'>1.5 Cr</h2> 
                      <p className='para-color font-hero-container'>Highest Package</p>
                  </div>
              </div>  
        </div>
             
          </div>
      <div className="hero-right">
        <Slider {...settings}>
          
          {heroCards.map((obj,idx) => (
           <div className="hero-card" key={idx}> 
          <div className="hero-card-img">
            <img src={obj.profile} alt={"Card 1"}/>
          </div>
          <div className="hero-card-name">
            <p className='para-color font-semibold'>{obj.name}</p>
          </div>
          <div className="hero-card-content">
            <p className='hero-font'>Pre Coding Shuttle</p>
            <p className='para-color font-semibold'>{obj.preCodingShuttle}</p>
            <FaArrowDown size={40} color={"rgb(78,58,203"} />
            <p className='hero-font'>Post Coding Shuttle</p>
            <img src={obj.company} alt={"Company Logo"} className='company-logo'/>
            <p className='para-color font-semibold'>{obj.role}</p>
          </div>
        </div>
        ))}
        </Slider>
        
          </div>
    </div>
    </>
  )
}

export default Hero;
