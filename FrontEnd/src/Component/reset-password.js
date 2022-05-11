import React from 'react';

<<<<<<< Updated upstream
//import './Styles/ForgotPassword.css';
=======
//import '../Styles/ForgotPassword.css';
>>>>>>> Stashed changes

function ForgotPassword() {
  return (
    <div className="bginstructor">
    <div className="container" >
      
      <div className="signup" >
        
    <form className="row g-3 needs-validation" novalidate>
      {/* <center><h2>E-Learning Platform</h2></center> */}
      <center> <h2>Forgot Password</h2></center><br/>
  <div className="col-md-12">
    {/* <label for="validationCustom01" className="form-label">First name</label> */}
    <label for="validationCustom01" className="form-label">Enter Your Email</label>
    <input placeholder='Enter your Email' type="email" className="form-control" id="validationCustom01"  required/>
    
  </div>
  <br/>

  <div className="col-md-12">
    <center><button className="btn btn12" type="submit" >Submit</button></center>
  </div>
  <br/>
  
</form>
</div>
</div>
</div>
  );
}

export default ForgotPassword;
