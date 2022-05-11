//import logo from './logo.svg';
import '../App.css';

import './AdminPanel'
import {useParams} from "react-router-dom";
import {useState} from "react";
import { Link } from "react-router-dom";
import {useEffect} from "react";
import AdminPanel from './AdminPanel';

const AdminTable=()=>{
  const [detail,setDetail] = useState([])
  useEffect(()=>{
      console.log("useeffect")
      fetch(`http://localhost:4000/user/instructor/`)
      .then(res=>res.json())
      .then((resp)=>{
        console.log("result",resp) 
        setDetail(resp) 
    }
    )},[])

   async function changeStatus(event) {
      event.preventDefault();
  const accept = fetch(`http://localhost:4000/user/instructor/${event.target.value}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    }),
}).then(result => result.json())
   .then((data)=>{
     console.log(data)
     window.location.href="/admin-table/instructor"
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
    <table className="table">
      <thead>
                   <tr>
                   <th scope="col">Id.</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Status</th>
                    <th scope="col">Handle</th>
                    </tr>
      </thead>
      <tbody>
    {detail.map((entry)=>
      <tr>
        <td scope="col">{entry._id}</td>
        <td scope="col">{entry.userData[0]?.fname}</td>
        <td scope="col">{entry.userData[0]?.lname}</td>
        <td scope="col">{entry.status ? "Accepted" : "Pending"}</td>
        {entry.status ?
         <></>: <button value={entry._id} onClick={changeStatus}>Accept</button>}
       
        <button>View</button>
        <button>Disable</button>
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
