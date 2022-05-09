import React from "react";
import "../Styles/user-side-course.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {faUpload} from '@fortawesome/free-solid-svg-icons';
import Header from "./Header";
import {useParams} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";

const CourseContent=()=>{
    const params = useParams();
    const [courseDetail,setCourseDetail] = useState("")

    useEffect(()=>{ 
      fetch(`http://localhost:4000/courses/${params.id}`)
     .then((result)=>
     {
       result.json()
       .then((resp)=>{
         console.log("result",resp) 
         setCourseDetail(resp) 
       })
     })  
   },[])
    return(
        <>
        <Header/>
        <div>
             
            <div class="mainu1">
                <div className="colu1">
                <center><h2 className="text-light mt-2">{courseDetail.title}</h2></center><hr/>
                <ul>
                    <li className="text-light">Introduction</li>
                </ul>
                </div>
                
                <div className="colu2">
                    <div class="editContentu">
                        <p><h1 className="save display-5 mt-3 text-success">Our Title</h1></p>
                        {/* <input  className="form-control  control save" type="text" placeholder="Enter Title Of Course"/> */}
                       <Link to='/discuss-course'>
                        <button className="savebtnu mt-2">Course Discussion</button>
                        </Link>
                    </div>
                    <div className="descArea">
                        
                    <center><iframe className="cvid mt-3" width="400rem" height="270rem" src="https://www.youtube.com/embed/Rezetez59Nk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
                    
                    </div>
                    
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default CourseContent