import React from "react";
import { Link } from "react-router-dom";
import js from '../Assets/js.png'
import './Showcase.css';
import Header from "../Header";
const Show=()=>{
    return(
      <>
      {/*<Header/>*/}
      <div>
<div className="mb-4 px-4 p-lg-0">
   <h5 className="mb-0 head">Account </h5>
   <img src={js} width="60rem" className="mt-1 mb-1 border" alt="profile pic" />
  <ul className="list-group list-group-clean">
    <li className="list-group-item ">
      <Link to='/Profile-edit'>
        <div className="d-flex justify-content-between align-items-center">
            <span>Profile account/edit</span>

        </div>
      </Link>
    </li>
    <li className="list-group-item ">
      <Link to='/Profcour'>
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <i className="icon icon-cart mr-2" />
            <span>Courses</span>
          </span>
        </div>
      </Link>
    </li>
    <li className="list-group-item ">
      <Link to='/InsCourse'>
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <i className="icon icon-alarm mr-2" />
            <span>Instructing Courses</span>
          </span>
        </div>
      </Link>
    </li>
    <li className="list-group-item ">
      <Link to='/Password-edit'>
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <i className="icon icon-alarm mr-2" />
            <span>Change Password</span>
          </span>
        </div>
      </Link>
    </li>
  </ul>
</div>
</div>
</>
    )
}
export default Show;