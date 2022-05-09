import React from "react";
import js from "../Assets/js.png";
// import '../Home/Home.css';
// import OwlCarousel from 'react-owl-carousel';  
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import Header from "../Header";
import {useState} from "react";
import {useEffect} from "react";

const CoursePage=()=>{
  const [courseList,setCourse] = useState([])

  useEffect(()=>{ 
    fetch('http://localhost:4000/courses')
   .then((result)=>
   {
     result.json()
     .then((resp)=>{
       console.log("result",resp) 
       setCourse(resp) 
     })
   })  
 },[])
    return(

       <div className="content-fluid">
         <Header/>
         <br/>
        <section className="section-two bg-light mb-5" id="bookroom">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <form className="p-4 shadow bg-white rounded">
          <h4 className="mb-1">Filter !</h4>
          <div className="row text-start">
            <div className="col-lg-3 col-md-6">
              <div className="mb-3 mb-lg-0">
                <label className="form-label"> Check by date : </label>
                <input
                  name="date"
                  type="date"
                  className="form-control start"
                  placeholder="Select date :"
                />
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6">
              <div className="mb-3 mb-lg-0">
              <label className="form-label"> Check by date : </label>
              <br/>
               <select
            className="custom-select form-control-simple"
            id="account-country"
          >
            
            <option value="">Sort by:</option>
            <option value="Brazil">Popularity(High to low)</option>
            <option value="Belgium">Popularity(low to high)</option>
            <option value="France">by Ratings</option>
            
          </select>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-md-4 mt-lg-4 pt-2 pt-lg-1">
                  <div className="d-grid">
                    <input
                      type="submit"
                      id="search"
                      name="search"
                      className="searchbtn btn btn-primary"
                      defaultValue="Search"
                    />
                  </div>
                </div>
                {/*end col*/}
              </div>
            </div>
          </div>
        </form>
      </div>
      {/*end col*/}
    </div>
    {/*end row*/}
  </div>
  {/*end container*/}
</section>

      <div className="booklist">{/*disp()*/}
      {courseList.map((course) =>
      <Link to='/CourseDetail' className="Link">
            <div class="card courses-desc overflow-hidden rounded shadow border-0">
                            <div class="position-relative d-block overflow-hidden">
                                <img src={js} class="img-fluid rounded-top mx-auto" alt=""/>
                                <div class="overlay-work bg-dark"></div>
                                <a href="javascript:void(0)" class="text-white h6 preview">Preview Now <i class="uil uil-angle-right-b align-middle"></i></a>
                            </div>

                            <div class="card-body">
                                <h5>{course.title}</h5>
                                <div class="fees d-flex justify-content-between">   
                                <h6>{course.userData[0]?.fname} {course.userData[0]?.lname}</h6>
                                {/* <h7>Date</h7> */}
                                </div>
                            </div>
                        </div>
          </Link>
      )}
      </div>
        
       
       </div>

    )
}
const disp=()=>{
    let arr=[];
    for(let i=0;i<9;i++)
    {
        arr.push( 
          <Link to='/CourseDetail' className="Link">
            <div class="card courses-desc overflow-hidden rounded shadow border-0">
                            <div class="position-relative d-block overflow-hidden">
                                <img src={js} class="img-fluid rounded-top mx-auto" alt=""/>
                                <div class="overlay-work bg-dark"></div>
                                <a href="javascript:void(0)" class="text-white h6 preview">Preview Now <i class="uil uil-angle-right-b align-middle"></i></a>
                            </div>

                            <div class="card-body">
                                <h5>Program</h5>
                                <div class="fees d-flex justify-content-between">   
                                <h6>Instructor Name</h6>
                                <h7>Date</h7>
                                </div>
                            </div>
                        </div>
          </Link>
        )
    }
    return arr;
}
let Inside=()=>{
  let arr=[];
  for(let i=0;i<5;i++)
  {
    arr.push(
    <Link className="Link" to='/CourseDetail'>
      <div className="outer card">
             <img className="img" src={js} alt="" />
             <h3>
               Introduction to js
             </h3>
             <h4>
               Instructor
             </h4>
           </div>  
           </Link>)
  }
  return arr;
}
export default CoursePage;
