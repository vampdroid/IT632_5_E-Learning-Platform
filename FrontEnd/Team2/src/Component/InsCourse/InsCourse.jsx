import React from "react";
import Show from "../Showcase/Showcase";
import js from '../Assets/js.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumpster } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
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
    <Link to='/Addnew' className="Link">
     <FontAwesomeIcon width={"5em"} icon={faPlus}/>
    </Link>
    <div className="rounded shadow p-4">
      
      <div className="row">
        <div className="col-md-4 col-12 mt-4 pt-2">
          <div className="card border-0 work-container work-classic">
            <div className="card-body p-0">
              <a href="portfolio-detail-one.html">
                <img
                  src={js}
                  className="img-fluid rounded work-image"
                  alt=""
                />
              </a>
              <div className="content pt-3">
                <h5 className="mb-0">
                  <a
                    href="portfolio-detail-one.html"
                    className="text-dark title"
                  >
                    Course1
                  </a>
                </h5>

                 <FontAwesomeIcon width={"5em"} icon={faDumpster}/>
                 <Link to='/EditCourse' className="Link">
                 <FontAwesomeIcon width={"5em"} icon={faEdit}/>
                 </Link>
              </div>
            </div>
          </div>
        </div>
        {/*end col*/}
        <div className="col-md-4 col-12 mt-4 pt-2">
          <div className="card border-0 work-container work-classic">
            <div className="card-body p-0">
              <a href="portfolio-detail-one.html">
                <img
                  src={js}
                  className="img-fluid rounded work-image"
                  alt=""
                />
              </a>
              <div className="content pt-3">
                <h5 className="mb-0">
                  <a
                    href="portfolio-detail-one.html"
                    className="text-dark title"
                  >
                    Course 2
                  </a>

                </h5>
                <FontAwesomeIcon width={"5em"} icon={faDumpster}/>
                <Link to='/EditCourse' className="Link">
                <FontAwesomeIcon width={"5em"} icon={faEdit}/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*end col*/}
        <div className="col-md-4 col-12 mt-4 pt-2">
          <div className="card border-0 work-container work-classic">
            <div className="card-body p-0">
              <a href="portfolio-detail-one.html">
                <img
                  src={js}
                  className="img-fluid rounded work-image"
                  alt=""
                />
              </a>
              <div className="content pt-3">
                <h5 className="mb-0">
                  <a
                    href="portfolio-detail-one.html"
                    className="text-dark title"
                  >
                    Course 3
                  </a>

                </h5>
                 <FontAwesomeIcon width={"5em"} icon={faDumpster}/>
                 <Link to='/EditCourse' className="Link">
                 <FontAwesomeIcon width={"5em"} icon={faEdit}/>
                 </Link>
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

export default InsCour;