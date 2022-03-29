import React from "react";
import { Link } from "react-router-dom";
import js from '../Assets/js.png'
import './InVisProfile.css'
const InVisProfile=()=>{
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
        <div className="">
             <h5 className="pre-label font-size-base head">Contact Details</h5>
            <table className="trblock">
                <tr className="">
                    <td className="">Name :</td>
                    <td className="">hello</td>
                </tr>
                <tr>
                    <td>Email ID :</td>
                    <td>hello</td>
                </tr>
                <tr>
                    <td>Address :</td>
                    <td>hello</td>
                </tr>
                <tr>
                    <td>Contact :</td>
                    <td>hello</td>
                </tr>
            </table>
        </div>
    )
}

export default InVisProfile;