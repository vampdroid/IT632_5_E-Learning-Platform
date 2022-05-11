//import '../Styles/ForgotPassword.css';

import React from 'react';

import { Link, useParams } from "react-router-dom";

function VerifyOTP() {
  const params = useParams();
  const verify = async () => {
    const url = `http://localhost:4000/user/verify-account/${params.resetToken}/${params.userid}`;
    console.log("URL IS ",url);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  verify();

  return (
    <div className="bginstructor">
       <h1>YOUR ACCOUNT HAS BEEN VERIFIED</h1>
       <Link to="/login">LOGIN</Link>   
    </div>
  );
}

export default VerifyOTP;
