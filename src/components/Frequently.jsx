import React from 'react'
import FaqCard from "./FaqCard.jsx"
import "./Frequently.css"
const Frequently = () => {
    const arr = [
        {
            "title": "Can I switch my domain from non-technical to technical after learning this program?",
            "ans":"You can definitely switch once you have the skill sets and the practical implementation that is provided in this program. Your degree does not matter to get you into a technical role these days."
        },
        {
            "title": "What is the duration of this Program and how long will I have access to this program?",
            "ans":"The course duration is 5 months. You will have access to the program content for 2 years."
        },
        {
            "title": "How will my doubts get resolved?",
            "ans":"You can raise your questions on our Forums or Discord workspace to get help from our mentors. We also conduct interactive Live sessions to clear any more doubts or questions you may have."
        },
        {
            "title": "Can I pay using EMIs?",
            "ans":"Yes, You can pay using EMIs. We also offer no-cost EMIs on all major Credit Cards as well as some Debit Cards."
        },
        {
            "title": "Do I need a computer for this program?",
            "ans":"Yes, you are required to have a decent laptop/computer with an internet connection."
        },
        {
            "title": "Can we download the video content?",
            "ans":"Although you can download the class notes, you will not be allowed to download any video content."
        },
        {
            "title": "I am not from a programming background, is this course fit for me?",
            "ans":"Some programming background is necessary to continue in this course. However if you are a complete beginner in Java, we do provide complementary preparatory modules to help you learn Java programming language at your own pace."
        },
        {
            "title": "I do not know any programming language, can I join this program?",
            "ans":"Java is essential to continue this Program, We have some preparatory modules to help you learn Java if you are not familiar with the Java programming language. You can access these modules immediately after you enroll in this course."
        },
        {
            "title": "Is there any Placements Assistance with this Program?",
            "ans":"Yes, we provide placements assistance in the form of Resume reviews, placements guidance webinars, job alerts, and Top Industry Mentors group sessions."
        },
        {
            "title": "Will I get job opportunities after completing this program?",
            "ans":"We offer a dedicated Job portal to present you with the latest Job opportunities. Although, we cannot guarantee a job, because nobody can. We promise that you will be 100% prepared to face any SDE level interviews if you complete the course diligently."
        },
        {
            "title": "How do the classes take place?",
            "ans":"The classes will take place in both pre-recorded and LIVE modes. The recorded lessons can be accessed from anywhere at any point in time. The timings for the LIVE sessions will be shared after the batch starts."
        },
        {
            "title": "What if I miss any of the LIVE Classes?",
            "ans":"Don’t worry, The recordings of every LIVE class will be shared on our platform within 24 hours after the LIVE class ends."
        },
        {
            "title": "Are certifications provided?",
            "ans":"Yes, you will get a course completion certificate once you complete this program. This certificate can be verified online using the unique certificate Id."
        },
        {
            "title": "Do you provide any other course materials as well?",
            "ans":"Yes, we will provide you with class notes as well as handpicked problems on our platform. Along with that we also provide complementary Java preparatory modules to help you get started with the Java programming language."
        }
    ]
  return (
      <div className='faqs-cards' id="frequently">
          {arr.map((obj,idx) => (
              <FaqCard obj={obj} idx={idx} key={idx}/>
        ))}
    </div>
  )
}

export default Frequently;
