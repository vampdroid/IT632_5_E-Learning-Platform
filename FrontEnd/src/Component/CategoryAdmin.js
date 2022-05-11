//import logo from './logo.svg';
import '../App.css';
import React from 'react';

import './AdminPanel'
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import AdminPanel from './AdminPanel';
import { Button } from 'react-bootstrap';

const AdminTable=()=>{
  const [detail,setDetail] = useState([])
  const [categoryName,setCategoryName] = useState("")
  const [categoryDesc,setCategoryDesc] = useState("")
  useEffect(()=>{
      console.log("useeffect")
      fetch(`http://localhost:4000/category/`)
      .then(res=>res.json())
      .then((resp)=>{
        console.log("result",resp) 
        setDetail(resp) 
    }
    )},[])

    async function deleteCategory(event) {
        event.preventDefault();
    const accept = fetch(`http://localhost:4000/category/${event.target.value}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      }),
  }).then(result => result.json())
     .then((data)=>{
       console.log(data)
       window.location.href="/admin-table/category"
     })
     }

     function validateCategoryName(event) {
            setCategoryName(event.target.value)
        }
    function validateCategoryDesc(event) {
        setCategoryDesc(event.target.value)
    }
     async function addCategory(event) {
        event.preventDefault();
    const accept = fetch(`http://localhost:4000/category/`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         "name" : categoryName,
          "description":categoryDesc
      }),
  }).then(result => result.json())
     .then((data)=>{
       console.log(data)
       window.location.href="/admin-table/category"
     })
     }

  return(
  <div className="main">
          <div className="left"><AdminPanel/></div>
          <div className="right">

<div className="Orders">
  <h2>All Orders</h2><br/>
<label>Rows per page: </label>  
<select  className="form-select-2" aria-label="Default select example">
    <option selected>Select Rows</option>
    <option value={1}>One</option>
    <option value={2}>Two</option>
    <option value={3}>Three</option>
  </select>
  <label>&emsp;&emsp;Filter By:</label>
  <select  className="form-select-1" aria-label="Default select example">
    <option selected> Order ID</option>
    <option value={1}>125</option>
    <option value={2}>456</option>
    <option value={3}>637</option>
  </select>
  <label>&emsp;&emsp; Search Here:</label>
  <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search" />
    <ul id="myUL">
      
    </ul>

  <br/>
  <form>
    <h4>Add Category</h4>
  <input type="textbox" onChange={validateCategoryName} placeholder="Category Name"></input>
  <input type="description" onChange={validateCategoryDesc} placeholder="Category Description"></input>
  <button onClick={addCategory}>Add Category</button>
  </form>
    <table className="table">
      <thead>
                   <tr>
                   <th scope="col">Id.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Handle</th>
                    </tr>
      </thead>
      <tbody>
    {detail.map((entry)=>
      <tr>
        <td scope="col">{entry._id}</td>
        <td scope="col">{entry.name}</td>
        <td scope="col">{entry.description}</td>
        <td scope="col">
        <button value={entry._id}onClick={deleteCategory}>Delete</button>
       {/* Forgot to add status in userschema*/}
        {/* <button>Disable</button> */}
        </td> 
        </tr>
        )}
      </tbody>
    </table>
  </div>
          </div>
      </div>
  );
}


export default AdminTable;
