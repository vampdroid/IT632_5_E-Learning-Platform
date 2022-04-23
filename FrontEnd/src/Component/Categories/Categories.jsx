import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import './Categories.css';

const Categories=(props)=>{
    return(
        <>
        <h2 class="mb-4 mb-lg-6 text-center mt-4 ">Categories:</h2>
        <div className="booklist" data-aos="fade-left">
            <Link className="Link" to="/Courses"><Sub /></Link>
            <Link className="Link" to="/Courses"><Sub /></Link>
            <Link className="Link" to="/Courses"><Sub /></Link>
            <Link className="Link" to="/Courses"><Sub /></Link>
            <Link className="Link" to="/Courses"><Sub /></Link>

        </div>
        </>
    )
}
const Sub=()=>{
  return(
    <div className="Book1">
        {/* <div className="Book-inside"> */}
          <FontAwesomeIcon width={"2em"} icon={faPlane}/>
           {/* </div> */}
        <h3 className="mt-2 Book-inside2">
        Physics</h3>
    </div>
  );
}

export default Categories;