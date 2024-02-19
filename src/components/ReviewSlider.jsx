import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ayush_Supath from "../images/Ayush_Supath.webp";
import Neelanshi_Vyas from "../images/Neelanshi_Vyas.webp";
import Uttkarsh_Sharma from "../images/Uttkarsh_Sharma.webp";
import Lokesh_Kumar from "../images/Lokesh_Kumar.webp";
import Shreya_Dubey from "../images/Shreya_Dubey.webp";
import Rishabh_Bajpai from "../images/Rishabh_Bajpai.webp";
import Shubham_Palav from "../images/Shubham_Palav.webp";
import Shreya_Adak from "../images/Shreya_Adak.webp";
import { FaStar } from "react-icons/fa";

const ReviewSlider = () => {

    const reviews = [
        {
            name: "Ayush Supath",
            profile:Ayush_Supath,
            comment: "Streaks problems kept me motivated to submit at least one question daily. This helped me revise the questions as well.",
        },
        {
            name: "Neelanshi Vyas",
            profile:Neelanshi_Vyas,
            comment: "Best part about the platform and the entire structure is it started from scratch, no hustle to learn. Everything is smooth and well explained."
        },
        {
            name: "Uttkarsh Sharma",
            profile:Uttkarsh_Sharma,
            comment:"I extend my gratitude to this course for simplifying my coding journey and elucidating concepts that had previously eluded my understanding."
        },
        {
            name: "Lokesh Kumar",
            profile:Lokesh_Kumar,
            comment:"I’ve seen other platforms and the worlds top universities’s DSA courses, and none of them can match the quality of Coding Shuttle’s DSA Prime Program."
        },
        {
            name: "Shreya Dubey",
            profile: Shreya_Dubey,
            comment:"I would like to say that I have learned all the concepts of DSA here in a very easy manner here we have solved over 400 problems"
        },
        {
            name: "Rishabh Bajpai",
            profile:Rishabh_Bajpai,
            comment:"I enjoyed the course and improved my DSA skills significantly. I would highly recommend it to anyone interested in DSA."
        },
        {
            name: "Shubham Palav",
            profile:Shubham_Palav,
            comment:"What sets Coding Shuttle apart is the inclusion of gamification elements, such as maintaining a daily streak and earning badges"
        },
        {
            name: "Shreya Adak",
            profile: Shreya_Adak,
            comment:"Anuj Bhaiya treats his students like a big brother. His teaching style is suitable for beginners to advanced level students"
        }
    ]
    const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    arrows: false,
    dots:false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
    {
        breakpoint: 1200,
        settings: {
        slidesToShow:2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
        swipeToSlide: true,
        }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite:true
            }
    }
        
    ]
    }
    
  return (
      <>
          <Slider {...settings}>
              {reviews.map((obj) => (
           <div className="review-card">
                      <div className="stars spacing">
                          <FaStar color='#EB0010' size={20}/>
                          <FaStar color='#EB0010' size={20}/>
                          <FaStar color='#EB0010' size={20}/>
                          <FaStar color='#EB0010' size={20}/>
                          <FaStar color='#EB0010' size={20}/>
                      </div>  
                      <div className="review-comment spacing">
                       <p> {obj.comment}</p>
                      </div>

                      <div className="review-student spacing">
                          <img src={obj.profile} alt={"student"} /> 
                          <div className="review-details">
                              <p>{obj.name}</p>
                              <p>DSA Prime 1.0 Student</p>
                          </div>
                      </div>
          </div>
          ))}   
          </Slider>
      </>
  )
}

export default ReviewSlider;
