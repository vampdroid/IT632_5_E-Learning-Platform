import '../Styles/Alogin.css';
import React from 'react';
import {useState} from "react";
import { Link } from "react-router-dom";
function Alogin() {

  
  const token = localStorage.getItem('token');
    
  if(token){
      window.location.href = '/admin-table/student'
  }
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [password, setPasswd] = useState("");
  const [passwdErr, setPasswdErr] = useState(false);

    function submitForm(event) {
      event.preventDefault();
      // if(emailErr || passwdErr || email== null || passwd == null  ){
      //     alert("Invalid data");
      // }
      // else{
          //let values = {email, passwd};
      
        fetch('http://localhost:4000/user/admin/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  email,
                  password,
              }),
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.token){
                localStorage.setItem("token",data.token);
                // localStorage.setItem("user",data.user);
                alert("Login sucessfull")
                window.location.href = '/admin-table/student'
            }
            else{
                alert("Login Failure")
            }
          })
      }
      

      // const data = await result.json();
      // if(data.email){
      //     alert("Registration sucessfull")
      //     window.location.href = '/login'
      // }
      // else{
      //     alert("registration Failure")
      // }
      // console.log("result",data);


  function validateEmail(event) {
      let emailEvent = event.target.value;
      if (emailEvent.length <= 5) {
          setEmailErr(true);
          setEmail(null)
      } else {
          setEmailErr(false);
          setEmail(emailEvent)
      }
  }

  function validatePasswd(event) {
      let passwdEvent = event.target.value;
      if (passwdEvent.length <= 5) {
          setPasswdErr(true);
          setPasswd(null)
      } else {
          setPasswdErr(false);
          setPasswd(passwdEvent)
      }
  }



  return (
    <>
    <body className="amain">
    <div className="acontainer" >
      <div className="asignup" >
    <form className="row g-3 needs-validation" novalidate>
      
   <center> <h2>Admin Login</h2></center>
  <div className="col-md-12">
    {/* <label for="validationCustom01" className="form-label">First name</label> */}

    <input placeholder='Enter Email Id' type="text" className="form-control" id="validationCustom01" name="email" value={email} onChange={validateEmail} required/>
  </div>
  <div className="col-md-12">
    {/* <label for="validationCustom01" className="form-label">First name</label> */}

    <input placeholder='Enter Password' type="password" className="form-control" id="validationCustom01" name='password' value={password} onChange={validatePasswd}  required/>
  </div>
  
   <Link to='/admin-table/student'>
  <div className="col-md-12">
    <center><button className="btn1 btn2" onClick={submitForm} type="submit" >Login</button></center>
  </div>
  </Link>
  
</form>
</div>
</div>
</body>

    </>
  );
}

export default Alogin;