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
    

    const [courseContent,setCourseContent] = useState({})
    const [youtubeLink,setYoutubeLink] = useState("")
    const [ourTitle,setOurTitle] = useState("")
    const [flag,setFlag] = useState(false);
    useEffect(async ()=>{ 
      await fetch(`http://localhost:4000/courses/${params.id}`)
     .then((result)=>
     {
       result.json()
       .then((resp)=>{
         setCourseContent(resp[0]) 
         setYoutubeLink(courseContent.Contents?.[0].video)
         !flag && setOurTitle(courseContent.Contents?.[0].title)
         setFlag(true);
        })
     })  
<<<<<<< Updated upstream
   },[courseContent])
   console.log(courseContent.Contents,"idgaf");
   
=======
   },[])
>>>>>>> Stashed changes
    return(
        <>
        <Header/>
        <div>
             
            <div class="mainu1">
                <div className="colu1">
                <center><h2 className="text-light mt-2">{courseContent.title}</h2></center><hr/>
                <ul>
                    {courseContent.Contents?.map((chapterName,index)=>{
                    // console.log(chapterName,"i99dgaf");
                    return (
                    <li className="text-light">
                        <button onClick={()=>{setYoutubeLink(chapterName.video);setOurTitle(chapterName.title)}} className="">{chapterName.title}</button></li>
                    )
                    })}
                </ul>
                </div>
                
                <div className="colu2">
                    <div class="editContentu">
                        <p><h1 className="save display-5 mt-3 text-success">{ourTitle}</h1></p>
                        {/* <input  className="form-control  control save" type="text" placeholder="Enter Title Of Course"/> */}
                       <Link to='/discuss-course'>
                        <button className="savebtnu mt-2">Course Discussion</button>
                        </Link>
                    </div>
                    <div className="descArea">
                        
                    <center><iframe className="cvid mt-3" width="400rem" height="270rem" src={youtubeLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
                    
                    </div>
                    
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default CourseContent