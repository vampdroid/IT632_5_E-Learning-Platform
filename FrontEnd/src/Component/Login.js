import LayoutGuest from './LayoutGuest';
import logo from '../logo.svg';
import '../Styles/Login.css'
import {useState} from "react";
import {Link} from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [passwd, setPasswd] = useState("");
    const [passwdErr, setPasswdErr] = useState(false);

    async function submitForm(event) {
        event.preventDefault();
        // if(emailErr || passwdErr || email== null || passwd == null  ){
        //     alert("Invalid data");
        // }
        // else{
            //let values = {email, passwd};
        
            const result = await fetch('http://localhost:4000/user/signIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    passwd,
                }),
            })

            const data = await result.json();
            if(data.token){
                localStorage.setItem("token",data.token);
                alert("Login sucessfull")
                window.location.href = '/aboutus'
            }
            else{
                alert("Login Failure")
            }
            console.log("result",data);
        //}
        

        // const data = await result.json();
        // if(data.email){
        //     alert("Registration sucessfull")
        //     window.location.href = '/login'
        // }
        // else{
        //     alert("registration Failure")
        // }
        // console.log("result",data);
    }

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
        <LayoutGuest>
            <form className="login100-form validate-form">
                <div className="text-center">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <span className="login100-form-title pb-1"> E learning platform </span>
                    <span className="login100-form-title pb-1"> Account Login </span>
                </div>
                <div className="col-12">
                    <div className="input-group">
                        <input type="email" onChange={(event) => validateEmail(event)}
                               className={`form-control input100 ${ emailErr ? "is-invalid" : ""}`} placeholder="Enter Email address"/>

                        {
                            emailErr ?
                                <span className="invalid-feedback">Enter valid email address</span>
                                : null
                        }
                    </div>
                </div>
                <div className="col-12">
                    <div className="input-group">
                        <input type="password" onChange={(event) => validatePasswd(event)}
                               className={`form-control input100 ${ passwdErr ? "is-invalid" : ""}`} placeholder="Enter password"/>
                        {
                            passwdErr ?
                                <span className="invalid-feedback">Enter valid Password</span>
                                : null
                        }
                    </div>

                </div>

                <div className="container-login100-form-btn mt-1">
                    <input className="login100-form-btn" onClick={submitForm} type="submit" value="Log in"/>
                </div>
                <div className="text-center pt-3 pb-1">
                    <span >Forgot</span>
                    <Link to="/"> Password?</Link>
                </div>

                <div className="text-center">
                    <span>Create an account?</span>
                    <Link to="/register">Sign up</Link>
                </div>
            </form>
        </LayoutGuest>
    );
}


export default Login;