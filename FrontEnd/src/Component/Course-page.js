import React from "react";
import tech from "./Assets/icon-profile.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import "../Styles/Coursepage.css"
import { Link } from "react-router-dom";
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
const Course=()=>{
   return(
       <div>
           <Header/>
           
           <div className=" bg-primary" >
    
               <div className="intro">
               <div className="introdiv ">
               <center><h1 className="display-6 text-light">Course Details</h1></center>  <hr/>
                   {/* <h1 className="text-white display-2 title learn"> */}
                   <div className="flex-main">
                   <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png" className="thumbnail"/>
                   
                   <h1 className="text-white display-2 title learn">Learn Javascript!</h1>
                   </div>
                   
                   {/* </h1> */}
                   <div className="para">
                   <p className="text-white desc">
                   <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quae aspernatur illum cupiditate ipsam, velit provident corporis fugiat magni maiores aperiam officiis eius architecto, expedita eveniet. Est qui sint doloribus.</strong>
                   </p><br></br></div> 
                   <Link to="/course-content">
                   <button className="btn btn-light btn-lg text-success enroll">Enroll Now</button><br/>
                    </Link>
               </div>
               </div>
           </div>
           <div className="intro1">
                   <div className="list1">
                       <div className="list3">
                           <center><strong><h2 className="mt-2">Content</h2></strong></center>
                           
                       {/* <nav className="nav-lb-tab nav" role={"tablist"} >
                               <div className="nav-item">
                                   <a href="#"className="nav-link active "  role={"tab"}>Content</a>
                               </div>
                               <div className="nav-item">
                                   <a href="#" className="nav-link active" role={"tab"}>Courses</a>
                               </div>
                               <div className="nav-item">
                                   <a href="#"  className="nav-link active" role={"tab"}>Courses</a>
                               </div>
                               <div className="nav-item">
                                   <a href="#" className="nav-link active" role={"tab"}>Courses</a>
                               </div>
                            
                       </nav> */}
                       </div>
                       <br/>
                       <div className="icon">
                           {/* <p className="ms-3">
                           <FontAwesomeIcon icon={ faPlay} /> */}
                           <table>
                               <thead>
                                   <tr>
                                       <th className="text-center">Sr.No</th>
                                       <th className="text-center">Topics</th>
                                   </tr>
                               </thead>
                               <tbody>
                                   <td className="text-center">1</td>
                                   <td className="text-center ">Introduction</td>
                               </tbody>
                           </table>
                           {/* &nbsp;&nbsp;&nbsp;&nbsp;<b>Introduction</b> */}
                           {/* </p> */}
                           </div>
                   </div>
                   <div className="list2" >
                    {/* <div className="list card mb-4">
                   <iframe className="vid" width="400rem" height="270rem" src="https://www.youtube.com/embed/Rezetez59Nk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   <h3 className="mt-2 ms-3">
                       Introduction to Js.
                   </h3>
                   <div>
                   <p className="ms-3">
                       <FontAwesomeIcon icon={faClock}/>
                       &nbsp;&nbsp;&nbsp; 20 hours

                   </p>
                   <p className="ms-3">
                       <FontAwesomeIcon icon={faBarChart}/>
                       &nbsp;&nbsp;&nbsp;Beginner
                   </p>
                   </div>
                   </div> */}
                   <div className="list card mt-5 ">
                       <div className="ms-3 mt-2">
                           <h3>Instructor</h3>
                           <img width="250rem"src={tech} alt="" />
                           <h4 className="ms-5">Username</h4>
                       </div>
                       <div className="">
                           
                       </div>
                   </div>
                   </div>
                   
               </div>
       </div>
   )
}

export default Course;