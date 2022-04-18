import React from "react";
import { Link } from "react-router-dom";
import js from '../Assets/js.png'

const AboutIns=()=>{
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
      <Link to='/ViewCourse'>
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
        <div className="">
             <h5 className="pre-label font-size-base head">Description</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, dolorum? Consectetur consequatur nulla nobis doloremque consequuntur,
                tempore assumenda necessitatibus praesentium. Aperiam eos facere,
                rem fugiat praesentium perferendis excepturi minus sequi?</p>
        </div>
    )
}

export default AboutIns;