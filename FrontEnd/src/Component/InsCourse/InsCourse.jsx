import React from "react";
import Show from "../Showcase/Showcase";
import js from '../Assets/js.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumpster } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import "./InsCourse.css";
const InsCour=()=>{
    return(
        <div className="main">
            <div className="left"><Show/></div>
            <div className="right"><InCour/></div>
        </div>
    )
}

let InCour=()=>{
    return(
        <>
  <div className="col-lg- col-12">
    <h5 className="mb-0 head">Courses instructed by you: </h5>
    <div className="rounded shadow p-4 booklist">
      {idisp()}
        <br />
      
  </div>
  <div className="mt-4 border button1">
      <button >
      <Link to='/add-course' className="Link">
      <h3>Add new <FontAwesomeIcon width={"1em"} icon={faPlus}/></h3>
    </Link>
    </button>
    </div>
  </div>
   
  

</>

    )
}

export default InsCour;

const idisp=()=>{
    let arr=[];
    for(let i=0;i<9;i++)
    {
        arr.push( 
         <div className="col-md-4 col-12 mt-4 pt-2">
          <div className="card border-0 work-container work-classic inscourse">
            <div className="card-body p-0 ">
              <a href="portfolio-detail-one.html">
                <img
                  src={js}
                  className="img-fluid rounded work-image"
                  alt=""
                />
              </a>
              <div className="content pt-3 incourse">
                <h5 className="mb-0">
                  <a
                    href="portfolio-detail-one.html"
                    className="text-dark title"
                  >
                    Course 2
                  </a>

                </h5>
                <FontAwesomeIcon width={"5em"} icon={faDumpster}/>
                <Link to='/edit-Course/:id' className="Link">
                <FontAwesomeIcon width={"5em"} icon={faEdit}/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        )
    }
    return arr;
}


