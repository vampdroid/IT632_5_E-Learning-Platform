//import logo from './logo.svg';
import '../Styles/Register.css';
import LayoutGuest from "./LayoutGuest";
import {Link} from "react-router-dom";
import {useState} from "react";

const Register = () => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")

    async function registerUser(event){
        event.preventDefault()
        //let values = {fname, lname, email, password};
        
        const result = await fetch('http://localhost:4000/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fname,
                lname,
                email,
                password,
            }),
        })

        const data = await result.json();
        if(data.email){
            alert("Registration successful")
            window.location.href = '/login'
        }
        else{
            alert("registration Failure")
        }
        console.log("result",data);
    }

    return (
        <LayoutGuest>
            <form className="row g-3 needs-validation" noValidate>
                <center><h2>E-Learning Platform</h2></center>
                <center><h2>Registration</h2></center>
                <div className="col-md-12">
                    {/* <label for="validationCustom01" className="form-label">First name</label> */}

                    <input type="text" 
                    value={fname} 
                    onChange={(e) =>setFname(e.target.value)}
                    placeholder='Enter Firstname' 
                    className="form-control" 
                    id="validationCustom01" required/>
                </div>
                <div className="col-md-12">
                    {/* <label for="validationCustom02" className="form-label">Last name</label> */}
                    <input type="text"
                    value={lname} 
                    onChange={(e) =>setLname(e.target.value)}
                    placeholder='Enter Lastname'
                    className="form-control" 
                    id="validationCustom02" required/>

                </div>
                <div className="col-md-12">
                    {/* <label for="validationCustomUsername" className="form-label">Email</label> */}
                    <div className="input-group has-validation">
                        <input type="email"
                        value={email} 
                        onChange={(e) =>setEmail(e.target.value)} 
                        placeholder='Enter Your Email' 
                        className="form-control"
                        id="validationCustomUsername" 
                        aria-describedby="inputGroupPrepend" required/><br/>

                    </div>
                </div>
                <div className="col-md-12">
                    {/* <label for="validationCustom05" className="form-label">Password</label> */}
                    <input type="password" 
                    value={password} 
                    onChange={(e) =>setPass(e.target.value)} 
                    placeholder='Enter Password'  
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    className="form-control" 
                    id="validationCustom05" required/>

                </div>
                <div className="col-md-12">
                    <center>
                        <button className="btn2 btn1" onClick={registerUser} type="submit">Submit</button>
                    </center>
                </div>
                <div className="col-md-12">
                    <center><label for="validationCustom05" className="form-label">Do you already have an
                        account?</label>
                        <Link to="/">Login</Link>
                    </center>

                </div>
            </form>
        </LayoutGuest>
    );
}

export default Register;
