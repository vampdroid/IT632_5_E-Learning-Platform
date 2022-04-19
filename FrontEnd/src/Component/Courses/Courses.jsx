import React from "react";
import js from '../Assets/js.png';
import Show from "../Showcase/Showcase";
import './Courses.css';
import { Link } from "react-router-dom";

const Profcour=()=>{
    return (
        <div className="main">
            <div className="left"><Show/></div>
            <div className="right"><Cour/></div>
        </div>
    )
}

let Cour=()=>{
    return(
        <>
  <div className="col-lg- col-12">
    <h5 className="mb-0 head">Courses: </h5>
    <div className="rounded shadow p-4">
      
      <div className="row">
        
        <div className="col-md-4 col-12 mt-4 pt-2">
          <Link to='/CourseDetail' className='Link'>
          <div className="card border-0 work-container work-classic">
            <div className="card-body p-0">
                <img
                  src={js}
                  className="img-fluid rounded work-image"
                  alt=""
                />
              <div className="content pt-3">
                <h5 className="mb-0">
              
                    Course 1
                </h5>
              </div>
            </div>
            
          </div>
           </Link>
        </div>
        {/*end col*/}
        <div className="col-md-4 col-12 mt-4 pt-2">
           <Link to='/CourseDetail' className='Link'>
          <div className="card border-0 work-container work-classic">
            <div className="card-body p-0">
                <img
                  src={js}
                  className="img-fluid rounded work-image"
                  alt=""
                />
             
              <div className="content pt-3">
                <h5 className="mb-0">
                  
                    Course 2
                 
                </h5>
              </div>
            </div>
          </div>
          </Link>
        </div>
        {/*end col*/}
        
  </div>
  </div>
  </div>
  {/*end col*/}
</>

    )
}
export default Profcour;