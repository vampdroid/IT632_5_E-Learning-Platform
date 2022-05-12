import React, { useEffect } from "react";
import { useState } from "react";
import "../Styles/editCourse.css";
import "bootstrap/dist/css/bootstrap.css";
import List_Content from "./List_Content";
import { useParams } from "react-router-dom";
import FormRange from "react-bootstrap/esm/FormRange";
import Header from "./Header";

const EditCourse2 = () => {
  const initialState = {
    title: "",
    description: "",
    video: "",  
    content: "",
  };
  const params = useParams();
  const [idx,setIdx] = useState(0);
  var [courseDetails, setCourseDetails] = useState(initialState);
  var [CourseContent,setCourseContent] = useState([])
  const [courseVideo, setVideo] = useState(null);
  const handleChange = (event) => {
    let { name } = event.target;
    const value = name === "video" ? event.target.files[0] : event.target.value;
    setCourseDetails({
      ...courseDetails,
      [name]: value,
    });
  };

  const setIndex=(ev)=>{
    // idx = ev.target.value;
    console.log(ev.target.value)
    setIdx(ev.target.value);


    setCourseDetails(CourseContent[ev.target.value])
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle Submit Click");
    console.log(courseDetails);
  };

  const add_field = async () => {

    courseDetails= initialState;
    setCourseDetails(courseDetails);
    setIdx(-1);
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

  const updateCOntent = ()=>{
    var formData = new FormData();

    formData.append("title",courseDetails.title);
    formData.append("description",courseDetails.description);
    if(courseDetails.video!=CourseContent[idx].video)
    {
      console.log(courseDetails.video)
      formData.append("content",courseDetails.video);
    }

    var url  =`http://localhost:4000/course/${courseDetails.course}/${courseDetails._id}`;
    console.log(url)
    fetch(url,{
      method:"PUT",
      body:formData
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
      alert("course updated")
    })

    CourseContent[idx]=courseDetails;
    setCourseContent(CourseContent)
    console.log(CourseContent);
  }

  const insertContent = async () => {
    var formData = new FormData();

    formData.append("title",courseDetails.title);
    formData.append("description",courseDetails.description);
    if(courseDetails.video!="")
    {
      console.log(courseDetails.video)
      formData.append("content",courseDetails.video);
    }

    var url  =`http://localhost:4000/course/${params.id}`;
    console.log(url)
    fetch(url,{
      method:"POST",
      body:formData
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
      courseDetails.course=res.course;
      CourseContent[CourseContent.length]=courseDetails;
      setCourseContent(CourseContent)
      console.log(CourseContent);
      alert("course Uploaded")
    })
   
  };
  var id;
  var contentString = "";
  useEffect( () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(!user)
    {
      window.location.href='login'
    }
    const url = `http://localhost:4000/courses/${params.id}`;
    fetch(url, {
      method: "GET",
      headers: {
          Accept:"application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) =>  res.json())
      .then((data) => {

      if(data[0].userData._id != user._id){
        alert('you are not instructor of this course');
        window.location.href='/'
      }
        
        
        CourseContent = data?.[0].Contents

        setCourseContent(CourseContent)
        console.log("C",CourseContent)
        setCourseDetails(CourseContent[0])
        if(CourseContent?.length==0){
          setIdx(-1);
        }
        else
          setIdx(0)

        console.log(courseDetails)
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
  }, []);
  console.log("____________",courseDetails)
  return (
      <>
        <Header/>
    <div>
      <div className="main1">

         <div className="col1" id="d">
          <center>
            <h2 className="text-light mt-2">List Of Content</h2>
          </center>
          <hr />
          
          <br></br>
          <ul>
            <li className="text-light">
          <input type="button" id="addtxt" className="buttonEditCourse" value="+" onClick={add_field} />
          </li>
            {console.log(CourseContent)}
                    {CourseContent?CourseContent.map((chapterName,index)=>{
                    // console.log(chapterName,"i99dgaf");
                    return (
                    <li key = {index} className="text-light">
                        
                        <button onClick={setIndex} value={index} className="buttonEditCourse">{chapterName.title}</button>
                         </li>
                    )
                    }):null}
                </ul>

          {/* <span className="text-light">Introduction</span> */}
        </div>
        <div className="col2">
          <div className="editContent">
            <input
              className="form-control  control save"
              type="text"
              id="title"
              name="title"
              value={courseDetails?.title}
              onChange={handleChange}
              placeholder="Enter Title Of Course"
            />
            <h2>{courseDetails?.title}</h2>

            {idx>=0 ?
            <button className="savebtn text-light" onClick={updateCOntent}>
              update
            </button>:
            <button className="savebtn text-light" onClick={insertContent}>
            save
          </button>}
          </div>
          <div className="descArea">
            <label htmlFor="file-input" className="fileinput">
              <input
                type="file"
                id="video"
                name="video"
                className="uploadfile"
                onChange={handleChange}
              />
              <img
                src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png"
                value={courseDetails?.video}
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
                value={courseDetails?.description}
                onChange={handleChange}
                placeholder="Enter Your Course Description"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
  );
};

export default EditCourse2;
