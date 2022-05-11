import React, { useState } from "react";
import Show from "../Showcase/Showcase";
const Passedit=()=>{
    return(
    <div className="main">
            <div className="left"><Show/></div>
            <div className="right"><PEdit/></div>
        </div>
    );
}
let PEdit=()=>{
  const [passw,setPassw]=useState({
    newpass:"",
    pass:""
  });

 const handleChange = (name) => (event) => {
   const value = event.target.value;
   setPassw({ ...passw, [name]: value });
   console.log(passw)
 };

    return (
      <div className="col-lg-9">
        <h5 className="pre-label font-size-base head">Change password</h5>
        <div className="bg-white p-4 p-lg-5 br-sm shadow-sm mb-3 mb-lg-5">
          <div className="form-group">
            <label className="pre-label pre-label-sm" htmlFor="old-pass">
              Old password
            </label>
            <input
              className="form-control form-control-simple"
              onChange={handleChange("pass")}
              type="password"
              id="old-pass"
              defaultValue={passw.pass}
            />
          </div>
          <div className="form-group">
            <label className="pre-label pre-label-sm" htmlFor="new-pass">
              New password
            </label>
            <input
              className="form-control form-control-simple"
              onChange={handleChange("newpass")}
              type="password"
              id="new-pass"
              defaultValue={passw.newpass}
            />
          </div>
          <div className="text-right mt-4 pt-2">
            <button
              className="btn btn-rounded btn-outline-primary btn-sm px-3"
              type="button"
            >
             
              <i className="fa fa-save mr-2" />
              Save changes
            </button>
          </div>
        </div>
      </div>
    );

}

export default Passedit;