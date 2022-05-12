
//import '../Styles/ForgotPassword.css';
import React from 'react';
import { useState } from "react";
import { useParams } from "react-router-dom";

function Reset_Password() {

    const [newPass, setPass] = useState("");
    const [confirmPass, setConfirm] = useState("");
    
    const params = useParams();
    const token = params.token;
    const userid = params.userid;
    
    console.log(token);
    console.log(userid);

    async function passReset(event) {
        event.preventDefault();

        console.log("hello");
      
        const url = `http://localhost:4000/user/resetPassword/${token}/${userid}`;
        console.log("URL IS ", url);

        let result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                newPass,
                confirmPass
            }),
        })
        const data = result.json();
        console.log(data);
    }

    return (
        <div className="bginstructor">
            <div className="container" >

                <div className="signup" >

                    <form className="row g-3 needs-validation" novalidate>
                        {/* <center><h2>E-Learning Platform</h2></center> */}
                        <center> <h2>New Password</h2></center><br />
                        <div className="col-md-12">
                            {/* <label for="validationCustom01" className="form-label">First name</label> */}

                            <input placeholder='Enter your new password'
                                type="password" className="form-control"
                                id="validationCustom01"
                                value={newPass}
                                onChange={(e) => setPass(e.target.value)}
                                required />

                        </div>
                        <br />
                        <div className="col-md-12">
                            {/* <label for="validationCustom01" className="form-label">First name</label> */}
                            <center> <h2>Confirm Password</h2></center><br />
                            <input placeholder='Confirm Password' type="password"
                                className="form-control"
                                id="validationCustom02"
                                value={confirmPass}
                                onChange={(e) => setConfirm(e.target.value)}
                                required />

                        </div>
                        <br />

                        <div className="col-md-12">
                            <center><button className="btn btn12" type="submit"
                                onClick={passReset} >Submit</button></center>
                        </div>
                        <br />

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Reset_Password;
