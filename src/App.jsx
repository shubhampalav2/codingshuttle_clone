import Header from './components/Header/Header';
import SectionHeader from './components/SectionHeader';
import atlassian from "./images/atlassian.webp";
import stud1 from "./images/jaykumarjaviya_2.webp";
import accenture from "./images/accenture.webp";
import stud2 from "./images/vinayshaw_2.webp";
import jio from "./images/jio.webp";
import stud3 from "./images/ravishankarkumar_2.webp";
import oracle from "./images/oracle.webp";
import stud4 from "./images/Harsh_Patel.webp";
import amazon from "./images/amazon.webp";
import stud5 from "./images/Sana_Siddiqui.webp";
import stud6 from "./images/Akhilesh_Pal.webp";
import bosch from "./images/bosch_img.webp";
import stud7 from "./images/Sujay_KS.webp";
import licious from "./images/licious.webp";
import stud8 from "./images/Shantanu_Ahuja.webp";
import infoedge from "./images/infoedge.webp";
import stud9 from "./images/Soham_Samanta.webp";
import microsoft from "./images/microsoft.webp";
import Card from './components/Card'; 
import Hero from "./components/Hero/Hero.jsx"
import './App.css';
import ReviewSlider from './components/ReviewSlider.jsx';
import Frequently from './components/Frequently.jsx';
import Discord from "./components/Discord.jsx";
import adobe from "./images/Adobe.png";
import uber from "./images/Uber.png";
import volkswagen from "./images/volkswagen.webp";
import accolite from "./images/accolite.webp";
import nagarro from "./images/nagarro.webp";
import campgemini from "./images/capgemini.webp";
import cimpress from "./images/cimpress.png";
import hashedin from "./images/hashedin.png";
import deloitte from "./images/deloitte.png";
import cultFit from "./images/Cult.fit.png";
import maqSoftware from "./images/maqSoftware.png";
import cred from "./images/cred.png";
import flipkart from "./images/flipkart.png";
import meesho from "./images/meesho.png";
import samsung from "./images/samsung.png";
import ibm from "./images/ibm.webp";
import paytm from "./images/paytm.webp";
import tcs from "./images/tcs.webp";
import urban_company from "./images/urban-company.webp";
import siemens from "./images/siemens.webp";
import salesforce from "./images/salesforce.webp";
import juspay from "./images/juspay.webp";
import expediagroup from "./images/expediagroup.webp";
import americanExpress from "./images/americanExpress.webp";
import deutsche_telekom from "./images/deutsche_telekom.webp";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const first = {
    marginTop:"4rem",
    fontSize: "1rem",
    color: "#8F2D56",
    fontWeight:"700"
  }

  const setting = {
    autoplay: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    arrows: false,
    dots: false,
    autoplaySpeed:900,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 400,
        setting:{
          slidesToShow:1,
          slidesToScroll:1,
        }
      }
    ]
  }
  
  const students = [
    {
      name: "Jaykumar Javiya",
      role: "Sr. Software Engineer",
      company:atlassian,
      image: stud1,
      feedback: `I was student of your first DSA batch. I wanted to share the good news with you that with the help of your
       DSA classes, I cracked Atlassian (as a senior software engineer) and Amazon(SDE II), Germany 3 months ago, and in September,
        I joined Atlassian from Germany.`,
      profile:"https://www.linkedin.com/in/jaykumar-javiya/" 
    },
    {
      name: "Vinay Shaw",
      role: "Software Engineer",
      company:accenture,
      image: stud2,
      feedback: `This DSA course is the best I have ever come across. What they provide far exceeds the cost. The course
       is exceptionally well-organized, and the video quality of their classes is top-notch. The problem section offers numerous 
       questions on specific topics, totaling over 450+.`,
      profile:"https://www.linkedin.com/in/vinay-shaw-162a591b7/" 
    },
    {
      name: "Ravi Shankar Kumar",
      role: "Software Engineer",
      company: jio,
      image: stud3,
      feedback: `DSA course is thoughtfully designed, allowing ample time for problem-solving – crucial for successful placements.
       Concepts are conveyed effectively, and the Coding Shuttle site provides related questions that align seamlessly with the 
       learning material.`,
      profile:"https://www.linkedin.com/in/ravi-shankar-kumar-3a7a3420a/"
    },
    {
      name: "Harsh Patel",
      role: "Software Engineer",
      company: oracle,
      image: stud4,
      feedback: `I got a full time offer from Oracle. I started my preparation from your Java Data Structure Algorithm Placement
       Course and I must say, you cleared a lot of my concepts of that specific subject. Thank you for your time and thanks for
        sharing such a valuable Course with us.`,
      profile:"https://www.linkedin.com/in/harshjatinkumarpatel/"
    },
    {
      name: "Sana Siddiqui",
      role: "SDE Intern",
      company: amazon,
      image: stud5,
      feedback: `The ease with which Anuj Bhaiya explains the concepts with such clarity is just amazing and praiseworthy. 
      I remember when I was doing my preparation for DSA, which ever topic I found difficult, I searched it on his channel and it 
      never disappointed. No doubt, the best content!`,
      profile:"https://www.linkedin.com/in/sana-siddiqui-3173a4193/"
    },
     {
      name: "Akhilesh Pal",
      role: "Software Developer",
      company:bosch,
      image: stud6,
       feedback: `Teaching skills made understanding easier. Used to struggle a lot with learning concepts. Your way of teaching
       helped me to learn concepts easier. As Anuj bhaiya solves the questions in Live class I am able to logically build that
       visualization of it and my speed of solving also kind of increased.`,
      profile:"https://www.linkedin.com/in/akhilesh-pal-a08483206/"
    },
    {
      name: "Sujay KS",
      role: "Software Engineer",
      company:licious,
      image: stud7,
      feedback: `I got a DevOps Engineer role at Licious. It all started from your Java DSA placement Course which helped me a lot. 
       I also followed your Android Development playlist and submitted the same projects with some tweaks during 3rd year.
       I felt lucky that I learned from your Courses.`,
      profile:"https://www.linkedin.com/in/sujay-ks-94389a191/"
    },
    {
      name: "Shantanu Ahuja",
      role: "Lead Engineer",
      company:infoedge,
      image: stud8,
      feedback: `I had the pleasure of taking Anuj's online data structures and algorithms course called DSA One.
       Anuj is an excellent instructor with a friendly and warm teaching style. He has a deep understanding of the subject matter
       and provides clear explanations of each topic.`,
      profile:"https://www.linkedin.com/in/shantanu-ahuja-2829a2148/"
    },
    {
      name: "Soham Samanta",
      role: "SDE intern",
      company:microsoft,
      image: stud9,
      feedback: `I cracked an SDE intern role at Microsoft because of your Java Placement Course. For me this LIVE Java Data Structure 
      Algorithm Course is 10/10. I very much liked the live doubt classes held at the end of every week. It was really a journey full
      of learnings.`,
      profile:"https://www.linkedin.com/in/soham-samanta2000/"
    }
  ]

  return ( 
    <div className='wrapper'>
      <Header/>
      <div className="main-container">
        <Hero />
        {/* Alumini's Placements Results */}

        <div className="results">
          <h2 className='result-heading'>1000+ Alumni Placed At</h2>
          <div className="result-container">
            <img src={amazon} alt={"amazon"} />
            <img src={adobe} alt={"adobe"} />
            <img src={oracle} alt={"oracle"} />
            <img src={uber} alt={"uber"} />
            <img src={atlassian} alt={"atlassian"} />
            <img src={microsoft} alt={"microsoft"} />
            <img src={accenture} alt={"accenture"} />
            <img src={jio} alt={"jio"} />
            <img src={volkswagen} alt={"volkswagen"} />
            <img src={accolite} alt={"accolite"} />
            <img src={nagarro} alt={"nagarro"} />
            <img src={campgemini} alt={"campgemini"} />
            <img src={cimpress} alt={"cimpress"} />
            <img src={hashedin} alt={"hashedin"} />
            <img src={deloitte} alt={"deloitte"} />
            <img src={cultFit} alt={"cultFit"} />
            <img src={maqSoftware} alt={"maqSoftware"} />
            <img src={cred} alt={"CRED"} style={{ height: "40px" }} />
            <img src={flipkart} alt={"flipkart"}/>
            <img src={meesho} alt={"meesho"} style={{ height: "40px" }} />
            <img src={samsung} alt={"samsung"} />
            <img src={ibm} alt={"ibm"} />
            <img src={tcs} alt={"tcs"} />
            <img src={paytm} alt={"paytm"} />
            <img src={urban_company} alt={"urban-company"} />
            <img src={infoedge} alt={"infoedge"} />
            <img src={bosch} alt={"bosch"} />
            <img src={siemens} alt={"siemens"} />
            <img src={salesforce} alt={"salesforce"} />
            <img src={juspay} alt={"juspay"} />
            <img src={americanExpress} alt={"americanExpress"} />
            <img src={expediagroup} alt={"expediagroup"} />
            
          </div>
          
          <div className="result-slider">
            <Slider {...setting} className="result-items">
            <div><img src={amazon} alt={"amazon"} /></div>
              <div><img src={adobe} alt={"adobe"} /></div>
              <div>  <img src={oracle} alt={"oracle"} /></div>
              <div><img src={uber} alt={"uber"} /></div>
              <div>   <img src={atlassian} alt={"atlassian"} /></div>
              <div>  <img src={microsoft} alt={"microsoft"} /></div>
              <div> <img src={accenture} alt={"accenture"} /></div>
              <div>    <img src={jio} alt={"jio"} /></div>
              <div><img src={cred} alt={"CRED"} style={{ height: "40px" }} /></div>
              <div>   <img src={maqSoftware} alt={"maqSoftware"} /></div>
              <div><img src={flipkart} alt={"flipkart"}/></div>

            </Slider> 

            <Slider {...setting} className="result-items">
            <img src={volkswagen} alt={"volkswagen"} />
            <img src={accolite} alt={"accolite"} />
            <img src={nagarro} alt={"nagarro"} />
            <img src={campgemini} alt={"campgemini"} />
            <img src={cimpress} alt={"cimpress"} />
            <img src={hashedin} alt={"hashedin"} />
            <img src={deloitte} alt={"deloitte"} />
            <img src={cultFit} alt={"cultFit"} />
            <img src={meesho} alt={"meesho"} style={{ height: "40px" }} />
            <img src={samsung} alt={"samsung"} />
            <img src={ibm} alt={"ibm"} />
            </Slider>

            <Slider {...setting} className="result-items">
            <img src={tcs} alt={"tcs"} />
            <img src={paytm} alt={"paytm"} />
            <img src={urban_company} alt={"urban-company"} />
            <img src={infoedge} alt={"infoedge"} />
            <img src={bosch} alt={"bosch"} />
            <img src={siemens} alt={"siemens"} />
            <img src={salesforce} alt={"salesforce"} />
            <img src={juspay} alt={"juspay"} />
            <img src={americanExpress} alt={"americanExpress"} />
            <img src={expediagroup} alt={"expediagroup"} />
            <img src={deutsche_telekom} alt={"deutsche_telekom"} />
            </Slider>
          </div>
        </div>

        <SectionHeader title1={"SUCCESS STORIES"} title2={"Transform Your Life With"} firstp={first} color={{color: "#8F2D56"}} main={"Coding Shuttle"}/>
      <div className="cards">
        {students.map((student,idx) => (
          <Card key={idx} student={student} />
       ))}
      </div>
      {/* <SectionHeader title1={"OUR CURRICULUM"} title2={"Structured Curriculum Vetted By"} firstp={first} color={{ color: "#006FE6" }} main={"Industry Experts"} /> */}
        <SectionHeader title1={"FAQS"} title2={"Frequently"} firstp={first} color={{ color: "#04A978" }} main={"Asked Questions"} />
        <Frequently />
        <Discord/>
      <SectionHeader title1={"REVIEWS"} title2={"Go Through Reviews Of Previous Students To"} firstp={first} color={{ color: "#EB0010" }} main={" Make An Informed Decision"}/> 
      <ReviewSlider /> 
      </div>
      <Footer/> 
    </div>
  );
}

export default App;
