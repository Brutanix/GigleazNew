import React, { useState } from "react";
import "./jobprofess.css";
import Footer from "../../utils/footer";


const Data = {
  consulting: [
    {
      "position": "CX Strategy & Operations (Contract)",
      "available": "Available at 32 Locations"
    },
    {
      "position": "Business Analyst",
      "available": "Available at 20 Locations"
    },
    {
      "position": "Management Consultant",
      "available": "Available at 25 Locations"
    },
    {
      "position": "Financial Advisor",
      "available": "Available at 18 Locations"
    }
  ],
  hardware: [
    {
      "position": "Hardware Engineer",
      "available": "Available at 10 Locations"
    },
    {
      "position": "Embedded Systems Developer",
      "available": "Available at 12 Locations"
    },
    {
      "position": "Network Architect",
      "available": "Available at 14 Locations"
    },
    {
      "position": "Electronics Technician",
      "available": "Available at 16 Locations"
    }
  ],
  engineering: [
    {
      "position": "Software Engineer",
      "available": "Available at 15 Locations"
    },
    {
      "position": "Civil Engineer",
      "available": "Available at 22 Locations"
    },
    {
      "position": "Mechanical Engineer",
      "available": "Available at 20 Locations"
    },
    {
      "position": "Electrical Engineer",
      "available": "Available at 18 Locations"
    }
  ],
  design: [
    {
      "position": "UX Designer",
      "available": "Available at 12 Locations"
    },
    {
      "position": "Graphic Designer",
      "available": "Available at 18 Locations"
    },
    {
      "position": "Product Designer",
      "available": "Available at 15 Locations"
    },
    {
      "position": "Web Designer",
      "available": "Available at 20 Locations"
    }
  ]
};



const Card=({each})=>{
  const {position,available}=each;

  return(
    <div className="job-profee-card">
    <h1>{position}</h1>
    <p>
      {available}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_1613_32193)">
          <path
            d="M5 11.9961H19"
            stroke="#646464"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 15.9961L19 11.9961"
            stroke="#646464"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 7.99609L19 11.9961"
            stroke="#646464"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1613_32193">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </p>
  </div>
  )

}

const JobByProfession = () => {
   const [activeid,setActiveid]=useState("consulting")
   console.log(activeid)


   const changeActiveid=(value)=>setActiveid(value)


  return (
    <div className="job-by-profess-bg">
      <div className="job-by-profess-top-bg">
        <h1>Professions</h1>
        <p>
          Discover numerous career opportunities and elevate your journey with
          Gigleaz. Explore various roles and join our innovative team to make an
          impact in your field.
        </p>
      </div>

      <div className="job-by-profession-bottom-bg">
        <div className="job-by-profession-bottom-left-bg">

          <div className="left-tab-container" >
           <a href="#consulting"><p  className={`${activeid=="consulting"?"profess-active-id":""}`} onClick={()=>changeActiveid("consulting")}>Consulting 
           and customer support</p></a> 
          </div>

          <div className="left-tab-container">
            <a href="#hardware"><p  className={`${activeid=="hardware"?"profess-active-id":""}`} onClick={()=>changeActiveid("hardware")}>Hardware and Manufacturet</p></a>
          </div>

          <div className="left-tab-container">
           <a href="#engineering"> <p  className={`${activeid=="engineering"?"profess-active-id":""}`}  onClick={()=>changeActiveid("engineering")}>Engineering, development, 
           and services</p></a>
          </div>

          <div className="left-tab-container">
           <a href="#design"> <p  className={`${activeid=="design"?"profess-active-id":""}`}  onClick={()=>changeActiveid("design")}>Design and Development</p></a>
          </div>

          <div className="left-tab-container">
            <a href="#business"><p  className={`${activeid=="business"?"profess-active-id":""}`} onClick={()=>changeActiveid("business")}>Business Technology</p></a>
          </div>

          <div className="left-tab-container">
           <a href="#datascience"> <p  className={`${activeid=="datascience"?"profess-active-id":""}`}  onClick={()=>changeActiveid("datascence")}>Data Science</p></a>
          </div>

          <div className="left-tab-container">
           <a href="#research"> <p  className={`${activeid=="research"?"profess-active-id":""}`}  onClick={()=>changeActiveid("research")}>Research, applied, and 
           data sciences</p></a>
          </div>

        </div>

        <div className="job-by-profession-bottom-right-bg">


          <div id="consulting" className="job-by-profess-card-bg">
           <div> <h1>Consulting and customer support</h1></div>
            <div className="job-by-profess-cards-wraper-bg">
             {
              Data.consulting.map((each)=><Card each={each}/>)
             }          
            </div>
          </div>

          <div id="hardware"  className="job-by-profess-card-bg">
           <div> <h1>Hardware and Manufacturet</h1></div>
            <div className="job-by-profess-cards-wraper-bg">
             {
              Data.hardware.map((each)=><Card each={each}/>)
             }          
            </div>
          </div>

          <div  id="engineering" className="job-by-profess-card-bg">
           <div> <h1>Engineering, development, 
           and services</h1></div>
            <div className="job-by-profess-cards-wraper-bg">
             {
              Data.engineering.map((each)=><Card each={each}/>)
             }          
            </div>
          </div>

          <div id="design" className="job-by-profess-card-bg">
           <div> <h1>Design and Development</h1></div>
            <div className="job-by-profess-cards-wraper-bg">
             {
              Data.design.map((each)=><Card each={each}/>)
             }          
            </div>
          </div>

         

          
        </div>
        
      </div>
      <Footer/>
    </div>
  );
};

export default JobByProfession;
