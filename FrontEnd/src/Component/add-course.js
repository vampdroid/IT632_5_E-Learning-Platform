//import logo from './logo.svg';
// import './App.css';
import '../Styles/add-course.css';
import {Link} from "react-router-dom";
import Header from './Header';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useEffect } from 'react';
import {useState} from "react";
import React from 'react';

function Add_course() {

  const [thumbnail,setthumbnail] = useState(null);
  const [categories,setCategory] = useState(null);
  const initialState ={
    title:"",
    description:"",
    thumbnail:"",
    category:"62624057a95105869d739ae0"
  }
  useEffect(()=>{

    fetch('http://localhost:4000/category')
        .then(res => res.json())
        .then(res =>{
          console.log(res);
          setCategory(res);
      })
  },[])

  const validateCategory = (ev)=>{
    console.log(course.category)
    if(course.category === "")
      return false;
    return true;
  }

  const handleChange = (ev) => {
    let { name, value } = ev.target;
    if(name === "thumbnail"){
      const files = Array.from(ev.target.files)
      console.log(files)
      setthumbnail(files)
      console.log(thumbnail)

    }
    setCourse({
      ...course,
      [name]: value,
    });
  };
  const[course,setCourse] = useState(initialState);

  async function Add_course(event)
  {

    const token = localStorage.getItem('token')
    if(!token){
      window.location.href = '/login'
    }
    event.preventDefault()
    let formData = new FormData();
    const thub = document.getElementById("validationCustom03");
    formData.append("thumbnail",thub.files[0]);
    formData.append("title",course.title);
    formData.append("description",course.description);
    formData.append("category",course.category);
    const result = await fetch('http://localhost:4000/courses', {
      method: 'POST',
      headers:
          {
            'accept': 'application/json',
            'authorization':`Bearer ${token}`
          },
      body: formData,
    })
    alert(result)
    const data = await result.json();
    if(data.email){
      alert("Course Added Successfully")
      window.location.href = '/editCourse'
    }
    else{
      alert("Course Not Added")
    }
    console.log("result",data);
  }

  const categoriesOptions =  categories!=null?categories.map(category =>{
    return <option value={category._id} key={category._id} >{category.name}</option>
  }):null;
  return (
    <>
    <Header/>
      <body className="main">
        
      <div className="container">
        <div className="signup">
          <form id="addCourseForm" className="row g-3 needs-validation" enctype="multipart/form-data" noValidate>

            <center><h2>Add Your Course Here</h2></center>
            <div className="col-md-12">
              {/* <label for="validationCustom01" className="form-label">First name</label> */}

              <input name='title' placeholder='Enter Course Title' value={course.title}
                      type="text" className="form-control" onChange={handleChange}
                     id="validationCustom01" required/>
            </div>
            {/*<div className="col-md-12">*/}
            {/*  /!* <label for="validationCustomUsername" className="form-label">Email</label> *!/*/}
            {/*  <div className="input-group has-validation">*/}
            {/*    <input name='user' placeholder='Enter Course Description' value="6239616b41c54b81336c1963"*/}
            {/*           type="text-area" className="form-control" id="validationCustomUsername"*/}
            {/*           aria-describedby="inputGroupPrepend" required/><br/>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/* <div className="col-md-12">
              <div className="input-group has-validation">
                <input name='category' placeholder='Enter Course Description' value={course.category}
                       onChange={handleChange}
                       type="text-area" className="form-control" id="validationCustomUsername"
                       aria-describedby="inputGroupPrepend" required/><br/>
              </div>
            </div> */}
            <div className="col-md-12">
              <div className="input-group has-validation">
                <Form.Select value={course.category}  name="category" size="lg" onChange={handleChange} isValid={validateCategory()}>
                  <option value=""> Select any category</option>
                  {categoriesOptions}
                </Form.Select>
              </div>
            </div>
            <div className="col-md-12">
              {/* <label for="validationCustomUsername" className="form-label">Email</label> */}
              <div className="input-group has-validation">
                <input name='description' placeholder='Enter Course Description' value={course.description}
                       onChange={handleChange}  type="text-area" className="form-control"
                       id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/><br/>
              </div>
            </div>
            <div className="col-md-12">
              {/* <label for="validationCustom03" className="form-label">City</label> */}
              <input name='thumbnail' placeholder='Enter Course Thumbnail' value={course.thumbnail}
                     onChange={handleChange}  type="file" className="form-control"
                     id="validationCustom03" required/>
            </div>
            <Link to="/edit-course">
            <div className="col-md-12">
              <center>
                <button className="btn1 btn2" type="submit" onClick={Add_course}>Add Course</button>
              </center>
            </div>
            </Link>
          </form>
        </div>
      </div>
      </body>
    </>
  );
}

export default Add_course;