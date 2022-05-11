import React, { useEffect } from "react";
import { useState } from "react";
import "../Styles/editCourse.css";
import "bootstrap/dist/css/bootstrap.css";
import List_Content from "./List_Content";

const EditCourse2 = () => {
  const initialState = {
    title: "",
    description: "",
    video: "",  
    content: "",
  };
  const [courseDetails, setCourseDetails] = useState(initialState);
  const [courseVideo, setVideo] = useState(null);
  const handleChange = (event) => {
    let { name, value } = event.target;
    setCourseDetails({
      ...courseDetails,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle Submit Click");
    console.log(courseDetails);
  };

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
    //   const Course=async()=>
    //   {
    //     const url='http://localhost:4000/course/625eee802cc42fc68002963a/add';
    //     const response=await fetch(url,{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json",
    //         },
    //         body:JSON.stringify(sendDetails)
    //     })
    //    response.json().then((data)=>{
    //        console.log(data);
    //    });
    //   }
  };
  const insertContent = async () => {
    console.log("into insert content");
    console.log(courseDetails);
    setCourseDetails({...courseDetails,content:contentString})
    //     const url = `http://localhost:4000/courses/623b022071928a40fd8b9b47`;
    //     const response = await fetch(url, {  
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(courseDetails),
    //     });
    //     response.json().then((data) => {
    //       console.log(data);
    //     });
  };
  var id;
  var contentString = "";
  useEffect( () => {
    const url = `http://localhost:4000/courses/623b022071928a40fd8b9b47`;
    fetch(url, {
      method: "GET",
      headers: {
          Accept:"application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourseDetails(data?.[0])
        // for (let i in data[0].Contents) {
        //   console.log(data[0].Contents[i].title);

        //   var t = document.createElement("span");
        //   var b = document.createElement("br");
        //   t.className = "text-light";
        //   var tx = document.createTextNode(data[0].Contents[i].title);
        //   id = document.createTextNode(data[0].Contents[i].id);
        //   contentString += data[0].Contents[i].title;
        //   t.appendChild(tx);
        //   t.appendChild(b);
        //   document.getElementById("d").appendChild(t);
        // }
      });
  }, [idx]);
  console.log("____________",courseDetails)
  return (
    <div>

      <div className="main1">

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
                    {courseDetails.Contents?.map((chapterName,index)=>{
                    // console.log(chapterName,"i99dgaf");
                    return (
                    <li key = {index} className="text-light">
                        
                        <button onClick={()=>{setIdx(index)}} className="">{chapterName.title}</button>
                         </li>
                    )
                    })}
                </ul>

          {/* <span className="text-light">Introduction</span> */}
        </div>
        <div className="col2">
          <div className="editContent">
            {/* <input
              className="form-control  control save"
              type="text"
              id="title"
              name="title"
              value={courseDetails?.[idx]}
            //   onChange={handleChange}
              placeholder="Enter Title Of Course"
            /> */}
            <h2>{courseDetails?.Contents?.[idx]?.title}</h2>

            <button className="savebtn text-light" onClick={insertContent}>
              Save
            </button>
          </div>
          <div className="descArea">
            <label htmlFor="file-input" className="fileinput">
              <input
                type="file"
                id="video"
                name="video"
                value={courseDetails.video}
                className="uploadfile"
                onChange={handleChange}
              />
              <img
                src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png"
                value={courseDetails.video}
                onChange={handleChange}
                className="fileup"
                width="150px"
              />
              <br />
              Upload Your Video Here!
            </label>
            <h1 id="fname"></h1>
            <br />
            <br />
            <br />
            <br />

            <div id="file-upload-filename"></div>
            <hr />
            <div className="txtarea">
              <textarea
                rows="10"
                cols="100"
                id="description"
                name="description"
                className="area"
                value={courseDetails?.Contents?.[idx].description}
                onChange={handleChange}
                placeholder="Enter Your Course Description"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourse2;
