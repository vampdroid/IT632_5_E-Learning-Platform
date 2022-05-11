import React from "react";
import tech from "./Assets/icon-profile.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import "../Styles/Coursepage.css"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import {useState} from "react";
import {useEffect} from "react";
import { ToggleButton } from "react-bootstrap";

    // console.log(courseDetail,courseDetail.Contents);

    // useEffect(()=>{
    //   console.log(localStorage.getItem("token"))
    //      fetch(`http://localhost:4000/enroll`,{
    //         method:"GET",
    //         "Content-Type":"application/json",
    //         Authorization: `Bearer 1 ${localStorage.getItem("token")}`
    //     }).then(data=>{
    //         console.log(data);
    //     })
    // },[])
const Course=()=>{
    const params = useParams();
    const [courseDetail,setCourseDetail] = useState({})
    const [enrolledCourses,setEnrolledCourses] = useState([]);
    const [toggle,setToggle] = useState(false);
    const unenrollCourse = async(e) =>{
    e.preventDefault();
    await fetch(`http://localhost:4000/enroll/${courseDetail?._id}`,{
        method:"DELETE",
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }).then(resp=>{
        console.log(resp);
        return resp.json();
    }).then(data=>{console.log(data)
        setToggle(!toggle);
    })
  }

    useEffect(()=>{ 
      fetch(`http://localhost:4000/courses/${params.id}`)
     .then((result)=>
     {
       result.json()
       .then((resp)=>{
        //  console.log("result",resp) 
         setCourseDetail(resp[0]) 
       })
     })  
   },[toggle])
   console.log(courseDetail)
    useEffect(async()=>{
        await fetch("http://localhost:4000/enroll",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(resp=>{return resp.json()}).then(data=>{console.log(data)
            setEnrolledCourses(data);
        })
    },[toggle])
   
 const enrollCourse = (event) =>{
    event.preventDefault();
    fetch(`http://localhost:4000/enroll/${courseDetail?._id}`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
       },
    })
    .then((result)=>
    {
      result.json()
      .then((resp)=>{
        console.log("enroll",resp)
        setToggle(!toggle);
        // window.location.href=`/course-content/${courseDetail._id}`
      })
    })
  }

  
 
   return(
       <div>
           <Header/>
           
           <div className=" bg-primary" >
    
               <div className="intro">
               <div className="introdiv ">
               <center><h1 className="display-6 text-light">Course Details</h1></center>  <hr/>
                   {/* <h1 className="text-white display-2 title learn"> */}
                   <div className="flex-main">
                   <img src={"data:image/"+courseDetail.contentType+";base64,"+courseDetail.thumbnail?.toString("base64")} className="thumbnail"/>
                   
                   <h4 className="text-white display-2 title learn">{courseDetail.title}
                    </h4>
                   </div>
                   
                   {/* </h1> */}
                   <div className="para">
                   <p className="text-white desc">
                   <strong>{courseDetail.description}</strong>
                   </p><br></br></div> 
                   {!(enrolledCourses && enrolledCourses.length>0 && enrolledCourses.find((course)=>
                       course?.course === courseDetail?._id
                   )) ? <><button onClick={(e)=>enrollCourse(e)} className="btn btn-light btn-lg text-success enroll">Enroll Now</button><br/></> : <><button onClick={(e)=>unenrollCourse(e)} className="btn btn-light btn-lg text-success enroll">Unenroll</button><br/><Link to={`/course-content/${courseDetail._id}`}>
                    <button className="btn btn-light btn-lg text-success enroll">View Course</button>
                    </Link></> }
                   
                    
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
                               {courseDetail.Contents && courseDetail.Contents.length>0 && courseDetail.Contents.map((course,id)=>{
                                   return <tbody key={id}>
                                    <td className="text-center">{id}</td>
                                    <td className="text-center ">{course.title}</td>
                                   </tbody>
                               })}
                               
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
                           {/* <img width="250rem"src={tech} alt="" /> */}
                           <img width="250rem"src={courseDetail?.userData?.profile_picture} alt="" />
                           <h4 className="ms-5">{courseDetail?.userData?.fname}</h4>
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