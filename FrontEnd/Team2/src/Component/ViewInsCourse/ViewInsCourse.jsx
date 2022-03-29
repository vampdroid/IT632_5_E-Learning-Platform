import React from "react";
import { Link } from "react-router-dom";
import js from '../Assets/js.png'
// import './InVisProfile.css'
const ViewCourse=()=>{
    return(
        <div className="main">
            <div className="left"><About/></div>
            <div className="right"><Detail/></div>
        </div>
    )
}

const About=()=>{
    return(
<div className="mb-4 px-4 p-lg-0">
   <Link to='/AboutIns' className="Link"><h5 className="mb-0 head">Know your Instructor </h5>
   </Link>
   <img src={js} width="60rem" className="mt-1 mb-1 border" alt="profile pic" />
  <ul className="list-group list-group-clean">
    <li className="list-group-item ">
      <Link to='/InVisProfile'>
        <div className="d-flex justify-content-between align-items-center">
            <span>Profile</span>

        </div>
      </Link>
    </li>
    <li className="list-group-item ">
      <Link to='/ViewCourse'>
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <i className="icon icon-alarm mr-2" />
            <span>Instructing Courses</span>
          </span>
        </div>
      </Link>
    </li>
  </ul>
</div>

    )

}

const Detail=()=>{
    return(
        <>
  <div className="col-lg- col-12">
    <h5 className="mb-0 head">Courses instructed by you: </h5>
    <div className="rounded shadow p-4">
      
      <div className="row">
        <div className="col-md-4 col-12 mt-4 pt-2">
          <div className="card border-0 work-container work-classic">
            <div className="card-body p-0">
             
                <img
                  src={js}
                  className="img-fluid rounded work-image"
                  alt=""
                />
              
              <div className="content pt-3">
                <h5 className="mb-0">
                  
                    Course1
                  
                </h5>

                
              </div>
            </div>
          </div>
        </div>
        {/*end col*/}
        <div className="col-md-4 col-12 mt-4 pt-2">
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
        </div>
        {/*end col*/}
        <div className="col-md-4 col-12 mt-4 pt-2">
          <div className="card border-0 work-container work-classic">
            <div className="card-body p-0">
             
                <img
                  src={js}
                  className="img-fluid rounded work-image"
                  alt=""
                />
             
              <div className="content pt-3">
                <h5 className="mb-0">
                  
                    Course 3
                 

                </h5>
                 
              </div>
            </div>
          </div>
        </div>
        {/*end col*/}
  </div>
  </div>
  </div>
  {/*end col*/}
</>

    )
}

export default ViewCourse;