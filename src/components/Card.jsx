import React from 'react'
import {FaLinkedin} from "react-icons/fa6";

const Card = ({student}) => {
  return (
    <div className='card-container'> 
          <div className="card-top">
              <div className="card-top-left">
                  <div className="profile-img">
                        <img src={student.image} alt={student.name + " image"} id="student-img"/> 
                  </div>
                  
                  <div className="profile-content">
                <strong>{student.name}</strong>   
                  <p>{student.role}</p>
                  <img src={student.company} alt={""} id="company-logo"/>
               </div>
                    
              </div>

        <div className="card-top-right">
          <a href={student.profile} target='_blank' rel="noreferrer"><FaLinkedin color="#0a66c2" size={26}/> </a>   
              </div>   
          </div>
          <div className="card-bottom">
              <p>{student.feedback}</p> 
          </div>
    </div>
  )
}

export default Card;
