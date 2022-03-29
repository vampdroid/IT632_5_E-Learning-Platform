// import '../Styles/Register.css';
// import LayoutGuest from "./LayoutGuest";
import {Link} from "react-router-dom";
import './Register.css';

function Register() {
    return (
        <div className="contains">
        <div className="Contain">
            <form className="row g-3 needs-validation" novalidate>
                <center><h2>E-Learning Platform</h2></center>
                <center><h2>Registration</h2></center>
                <div className="col-md-12">
                    {/* <label for="validationCustom01" className="form-label">First name</label> */}

                    <input placeholder='Enter Firstname' type="text" className="form-control" id="validationCustom01"
                           required/>
                </div>
                <div className="col-md-12">
                    {/* <label for="validationCustom02" className="form-label">Last name</label> */}
                    <input placeholder='Enter Lastname' type="text" className="form-control" id="validationCustom02"
                           required/>

                </div>
                <div className="col-md-12">
                    {/* <label for="validationCustomUsername" className="form-label">Email</label> */}
                    <div className="input-group has-validation">
                        <input placeholder='Enter Your Email' type="email" className="form-control"
                               id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/><br/>

                    </div>
                </div>
                <div className="col-md-12">
                    {/* <label for="validationCustom05" className="form-label">Password</label> */}
                    <input placeholder='Enter Password' type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                           className="form-control" id="validationCustom05" required/>

                </div>
                <div className="col-md-12">
                    <center>
                        <button className="btn2 btn1" type="submit">Submit</button>
                    </center>
                </div>
                <div className="col-md-12">
                    <center><label for="validationCustom05" className="form-label">Do you already have an
                        account?</label>
                        <Link to="/">Login</Link>
                    </center>

                </div>
            </form>
        </div>
</div>
    );
}

export default Register;