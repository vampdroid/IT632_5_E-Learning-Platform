import React from "react";
import js from '../Assets/js.png';
import Show from "../Showcase/Showcase";
import './Courses.css';
import { Link } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Header";

const Profcour=()=>{
    return (
      <>
        <Header/>
        <div className="main">
          <div className="left">
            <Show />
          </div>
          <div className="right">
            <Cour />
          </div>
        </div>
      </>
    );
}

let Cour=()=>{
    return(
        <>
  <div className="col-lg- col-12">
    <h5 className="mb-0 head">Courses: </h5>
    <div className="rounded shadow  booklist1">
      {cdisp()}
  </div>
  </div>
 
</>

    )
}
export default Profcour;
const cdisp=()=>{
    let arr=[];
    for(let i=0;i<9;i++)
    {
        arr.push( 
          <div className=" col-md-4 col-12 mt-4 ms-2 mb-3">
          <Link to='/course-detail' className='Link'>
          <div className="card border-0 work-container work-classic inscourse">
            <div className="card-body p-0">
                <img
                  src={js}
                  className="img-fluid rounded work-image"
                  alt=""
                />
              <div className="content pt-3 incourse">
                <h5 className="mb-0">
              
                    Course 1
                </h5>
              </div>
            </div>
            
          </div>
           </Link>
        </div>
        )
    }
    return arr;
}

 