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
      <div className="col-sm-6 length">
        <div className="form-group">
          <label className="pre-label pre-label-sm " htmlFor="account-email">
            Expertise
          </label>
          <input
            className="form-control form-control-simple"
            type="text"
            id="account-email"
            defaultValue=""
          />
        </div>
      </div>
      <div className="col-sm-6 length">
        <div className="form-group">
          <label className="pre-label pre-label-sm " htmlFor="account-email">
            Works as:
          </label>
          <input
            className="form-control form-control-simple"
            type="text"
            id="account-email"
            defaultValue=""
          />
        </div>
      </div>
      <div className="col-sm-12 length">
        <div className="form-group">
          <label className="pre-label pre-label-sm " htmlFor="account-email">
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
      <div className="col-sm-12 length">
        <div className="form-group">
          <label className="pre-label pre-label-sm " htmlFor="account-email">
            Bio:
          </label>
          <textarea
            className="form-control form-control-simple"
            type="text"
            id="account-email"
            defaultValue=""
          />
        </div>
      </div>
      <div className="col-sm-12">
        <div className="form-group">
          <label className="pre-label pre-label-sm" htmlFor="account-city">
            Address Line
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
            PIN/ZIP Code
          </label>
          <input
            className="form-control form-control-simple"
            type="text"
            id="account-zip"
            defaultValue={11374}
          />
        </div>
      </div>
      <div className="centring">
        
        <div className="form-group">
          

          <label className="pre-label pre-label-sm" htmlFor="account-fn">
            Upload Image
          </label>
          <input
            className="form-control form-control-simple"
            type="file"
            id="account-fn"
            defaultValue=""
          />
        </div>
      </div>
      <div className="col-12">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          
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