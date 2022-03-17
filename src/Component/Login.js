import Layout from './Layout';
import logo from '../logo.svg';
import '../Styles/Login.css'
import {useState} from "react";
import {Link} from "react-router-dom";

function Login() {

    const [email, setEmail] = useState(null);
    const [emailErr, setEmailErr] = useState(false);
    const [passwd, setPasswd] = useState(null);
    const [passwdErr, setPasswdErr] = useState(false);

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

    function submitForm(event) {

        if(emailErr || passwdErr || email== null || passwd == null  ){
            alert("Invalid data");
        }
        event.preventDefault();
    }

    return (
        <Layout>
            <form onSubmit={submitForm} className="login100-form validate-form">
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
                    <input className="login100-form-btn" type="submit" value="Log in"/>
                </div>
                <div className="text-center pt-3 pb-1">
                    <span >Forgot</span>
                    <Link to="/"> Password?</Link>
                </div>

                <div className="text-center">
                    <span>Create an account?</span>
                    <Link to="register">Sign up</Link>
                </div>
            </form>
        </Layout>
    );
}


export default Login;