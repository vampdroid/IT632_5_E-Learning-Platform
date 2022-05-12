import React from "react";
import "../Styles/user-side-course.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {faUpload} from '@fortawesome/free-solid-svg-icons';
import Header from "./Header";
import {useParams} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'
const CourseContent=()=>{
    const params = useParams();
    

    const [courseContent,setCourseContent] = useState({})
    const [youtubeLink,setYoutubeLink] = useState("")
    const [ourTitle,setOurTitle] = useState("")
    const [contentType,setContetType] = useState("")
    const [flag,setFlag] = useState(false);
    useEffect( ()=>{
       fetch(`http://localhost:4000/courses/${params.id}`)
     .then((result)=>
     {
       result.json()
       .then((resp)=>{
         setCourseContent(resp[0]) 
         setYoutubeLink(`http://localhost:4000/course/${courseContent.Contents?.[0].course}/${courseContent.Contents?.[0]._id}/video`)
         setContetType(courseContent.Contents?.[0].contentType)
         !flag && setOurTitle(courseContent.Contents?.[0].title)
         setFlag(true);
        })
     })  
   },[])
    return(
        <>
        <Header/>
        <div>
             
            <div className="mainu1">
                <div className="colu1">
                <center><h2 className="text-light mt-2">{courseContent.title}</h2></center><hr/>
                <ul>
                    {courseContent.Contents?.map((chapterName,index)=>{
                    // console.log(chapterName,"i99dgaf");
                    return (
                    <li className="text-light">
                        {console.log(chapterName)}
                        <button onClick={()=>{setYoutubeLink(`http://localhost:4000/course/${chapterName.course}/${chapterName._id}/video`);
                        setOurTitle(chapterName.title)
                        setContetType(chapterName.contentType)
                    }} className="buttonEditCourse">{chapterName.title}</button></li>
                        
                    )
                    })}
                </ul>
                </div>
                
                <div className="colu2">
                    <div className="editContentu">
                        <p><h1 className="save display-5 mt-3 text-success">{ourTitle}</h1></p>
                        {/* <input  className="form-control  control save" type="text" placeholder="Enter Title Of Course"/> */}
                       <Link to='/discuss-course'>
                        <button className="savebtnu mt-2">Course Discussion</button>
                        </Link>
                    </div>
                    <div className="descArea">
                        
                    <center>
                        {console.log(youtubeLink)}
                        {/* <VideoContent link="http://localhost:4000/course/62652a6f675d35aea6ef37a1/627c9c2d4ffcdce987906e20/video" /> */}
                        {youtubeLink != "http://localhost:4000/course/undefined/undefined/video"?<VideoContent link={youtubeLink} type={contentType}/>:null }
                        
                    </center> 
                    </div>
                    
                    
                </div>
            </div>
        </div>
        </>
    )
}

const VideoContent = (props)=>{
    console.log(props)
    return (
            <Player
              playsInline
              src={props.link}
            />
    )
}
export default CourseContent