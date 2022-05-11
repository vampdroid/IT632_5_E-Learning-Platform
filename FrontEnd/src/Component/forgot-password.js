import React from 'react';
import {useState} from "react";

import '../Styles/ForgotPassword.css';

function Forgot_Password() {

  const [email, setEmail] = useState("");

  async function submitForm(event) {
    event.preventDefault();

    console.log(email);
    // if(emailErr || passwdErr || email== null || passwd == null  ){
    //     alert("Invalid data");
    // }
    // else{
    //let values = {email, passwd};

    const result = await fetch('http://localhost:4000/user/forgotPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email
      }),
    })
    console.log("returned");
    const data = await result.json();
    if (data) {
      alert(data)
    }
    else {
      alert(data)
    }
  }


  return (
    <div className="bginstructor">
      <div className="container" >

        <div className="signup" >

          <form className="row g-3 needs-validation" novalidate>
            {/* <center><h2>E-Learning Platform</h2></center> */}
            <center> <h2>Forgot Password</h2></center><br />
            <div className="col-md-12">
              {/* <label for="validationCustom01" className="form-label">First name</label> */}
              <label for="validationCustom01" className="form-label">Enter Your Email</label>
              <input
                placeholder='Enter your Email'
                type="email" className="form-control"
                id="validationCustom01"
                onChange={(e) => setEmail(e.target.value)}
                required />

            </div>
            <br />

            <div className="col-md-12">
              <center><button className="btn btn12"
                type="submit" onClick={submitForm}>Submit</button></center>
            </div>
            <br />

          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgot_Password;
