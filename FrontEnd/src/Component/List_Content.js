import React, { useEffect } from "react";
import { useState } from "react";
import "../Styles/editCourse.css";
import "bootstrap/dist/css/bootstrap.css";

const List_Content=()=>
{
    const initialState = {
        title: "",
        description: "",
        video: "",  
        content: "",
      };
      const [courseContent,setCourseContent] = useState({})
      const [courseDetails, setCourseDetails] = useState(initialState);
    const add_field = async () => {
        console.log(courseDetails);
        const sendDetails = { content: courseDetails.content };
    
        var title = document.getElementById("d");
        if (courseDetails.title == "") {
          var errorString = "Please Enter All Details Correctly";
        }
        const url = "http://localhost:4000/courses";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sendDetails),
        });
        response.json().then((data) => {
          console.log(data);
        });
    }
    const handleChange = (event) => {
        let { name, value } = event.target;
        setCourseDetails({
          ...courseDetails,
          [name]: value,
        });
    }
    return(
        <div className="col1" id="d">
          <center>
            <h2 className="text-light mt-2">List Of Content</h2>
          </center>
          <hr />
          <input
            type="text"
            id="content"
            name="content"
            value={courseDetails.title}
            onChange={handleChange}
          ></input>

          <input type="button" id="addtxt" value="+" onClick={add_field} />
          <br></br>
          <ul>
                    {courseContent.Contents?.map((chapterName,index)=>{
                    // console.log(chapterName,"i99dgaf");
                    return (
                    <li className="text-light">
                        
                        <button onClick={()=>{console.log(courseDetails.title)}} className="">afasf</button></li>
                    )
                    })}
                </ul>

          {/* <span className="text-light">Introduction</span> */}
        </div>
    );

}

export default List_Content;