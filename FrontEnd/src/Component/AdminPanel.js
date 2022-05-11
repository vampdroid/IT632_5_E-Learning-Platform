import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import './Showcase/Showcase.css';

const AdminPanel=()=>{



    return(

<div className="mb-4 px-4 p-lg-0">
   <h5 className="mb-0 head">Edulogy Admin </h5>
   <img src={logo} width="60rem" className="mt-1 mb-1 border" alt="profile pic" />
  <ul className="list-group list-group-clean">
    <li className="list-group-item ">
      <Link to='/admin-table/student'>
        <div className="d-flex justify-content-between align-items-center">
            <span>Students</span>

        </div>
      </Link>
    </li>
    <li className="list-group-item ">
    <Link to='/admin-table/instructor'>
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <i className="icon icon-cart mr-2" />
            <span>Instructors</span>
          </span>
        </div>
      </Link>
    </li>
    <li className="list-group-item ">
    <Link to='/admin-table/courses'>
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <i className="icon icon-alarm mr-2" />
            <span>Courses</span>
          </span>
        </div>
      </Link>
    </li>
    <li className="list-group-item ">
    <Link to='/admin-table/enrollments'>
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <i className="icon icon-alarm mr-2" />
            <span>Enrollments</span>
          </span>
        </div>
      </Link>
    </li>
    <li className="list-group-item ">
    <Link to='/admin-table'>
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <i className="icon icon-alarm mr-2" />
            <span>Logout</span>
          </span>
        </div>
      </Link>
    </li>
  </ul>
</div>

    )
}
export default AdminPanel;