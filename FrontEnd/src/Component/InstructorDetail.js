//import logo from './logo.svg';
import React, { useState ,useEffect } from "react";
import '../Styles/InstructorDetail.css';

function InstructorDetail() {

  const token = localStorage.getItem('token');
  const initialState = {
    expertise:"",
    works_as:"",
    qualification:""
  };
  const [insDetails, setInsUpdate] = useState("");

  const InsDetailUpdater = (ev)=>{
    const {name, value}= ev.target;
    setInsUpdate({
      ...insDetails,
      [name]:value
    })
  }

  useEffect(()=>{

    if(!token){
      window.location.href='/login'
    }
  },[])


  const postInstructor = (event)=>{
    event.preventDefault();
    if(!token){
      window.location.href='/login'
    }
    console.log(insDetails)
    fetch(`http://localhost:4000/user/instructor`,{
      method:"POST",
      headers:{
        'content-type': 'application/json',
        'authorization':`Bearer ${token}`
      },
      body:JSON.stringify(insDetails)
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
      alert("Request Sent")
      window.location.href='/'
    })
  }

  return (
    <div className="bginstructor">
    <div className="container" >
      
      <div className="signup" >
        
    <form className="row g-3 needs-validation" novalidate>
      {/* <center><h2>E-Learning Platform</h2></center> */}
      <center> <h2>Become an Instructor</h2></center><br/>
  <div className="col-md-12">
    {/* <label for="validationCustom01" className="form-label">First name</label> */}

    <input name="expertise" value={insDetails.expertise}  onChange={InsDetailUpdater} placeholder='Enter your field of expertise' type="text" className="form-control" id="validationCustom01"  required/>
    
  </div>
  <br/>
  <div className="col-md-12">
    {/* <label for="validationCustom02" className="form-label">Last name</label> */}
    <input name="works_as" value={insDetails.works_as}  onChange={InsDetailUpdater}   placeholder='Work As' type="text" className="form-control" id="validationCustom02"  required/>
    
  </div>
  <br/>
  <div className="col-md-12">
    {/* <label for="validationCustomUsername" className="form-label">Email</label> */}
    <div className="input-group has-validation"> 
      <input   name="qualification" placeholder='Enter Qualification' value={insDetails.qualification}  onChange={InsDetailUpdater}  type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/><br/>
      
    </div>
    <br/>
  </div>
  
  <br/>
  <div className="col-md-12">
    <center><button className="btn btn1" onClick={postInstructor} type="submit" >Submit</button></center>
  </div>
  <br/>
  {/* <div className="col-md-12">
    <center><label for="validationCustom05" className="form-label">Do you already have an account?</label>
    <a href="">Login</a></center>
  
  </div> */}
</form>
</div>
</div>
</div>
  );
}

export default InstructorDetail;
