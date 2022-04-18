import React from "react";
import Show from "../Showcase/Showcase";

const Profedit=()=>{
    return(
    <div className="main">
            <div className="left"><Show/></div>
            <div className="right"><Edit/></div>
        </div>
    );
}
let Edit=()=>{
    return(
         <>
  <h5 className="pre-label font-size-base head">Profile settings</h5>
  <div className="bg-white p-4 p-lg-5 br-sm shadow-sm mb-3 mb-lg-5">
    <div className="row">
      <div className="col-sm-6">
        <div className="form-group">
          <label className="pre-label pre-label-sm" htmlFor="account-fn">
            First Name
          </label>
          <input
            className="form-control form-control-simple"
            type="text"
            id="account-fn"
            defaultValue="John"
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label className="pre-label pre-label-sm" htmlFor="account-ln">
            Last Name
          </label>
          <input
            className="form-control form-control-simple"
            type="text"
            id="account-ln"
            defaultValue="Dow"
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label className="pre-label pre-label-sm" htmlFor="account-email">
            Email address
          </label>
          <input
            className="form-control form-control-simple"
            type="text"
            id="account-email"
            defaultValue="j.doe@example.com"
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label className="pre-label pre-label-sm" htmlFor="account-username">
            Username
          </label>
          <div className="input-group">
            <input
              className="form-control form-control-simple"
              type="text"
              id="account-username"
              defaultValue="john_doe"
            />
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label className="pre-label pre-label-sm mt-3 me-1" htmlFor="account-country">
            Country
          </label>
          <select
            className="custom-select form-control-simple"
            id="account-country"
          >
            <option value="">Select country</option>
            <option value="Brazil">Brazil</option>
            <option value="Belgium">Belgium</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="Spain">Spain</option>
            <option value="UK">United Kingdom</option>
            <option value="Russia" selected="">
              Russia
            </option>
          </select>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label className="pre-label pre-label-sm" htmlFor="account-city">
            City
          </label>
          <input
            className="form-control form-control-simple"
            type="text"
            id="account-city"
            defaultValue="New York"
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label className="pre-label pre-label-sm" htmlFor="account-address">
            Address Line
          </label>
          <input
            className="form-control form-control-simple"
            type="text"
            id="account-address"
            defaultValue="4 NW. Park Ave."
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label className="pre-label pre-label-sm" htmlFor="account-zip">
            ZIP Code
          </label>
          <input
            className="form-control form-control-simple"
            type="text"
            id="account-zip"
            defaultValue={11374}
          />
        </div>
      </div>
      <div className="col-12">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          {/* <div className="custom-control custom-checkbox d-block">
            <input
              className="custom-control-input"
              type="checkbox"
              id="show-email"
              defaultChecked=""
            />
            <label className="custom-control-label" htmlFor="show-email">
              Show my email to registered users
            </label>
          </div> */}
          <button
            className="btn btn-rounded btn-outline-primary btn-sm px-3 mt-3  "
            type="button"
          >
            
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  </>
    );
}

export default Profedit;