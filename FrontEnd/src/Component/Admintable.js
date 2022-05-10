//import logo from './logo.svg';
import '../App.css';
import './AdminPanel'
import {useParams} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import AdminPanel from './AdminPanel';

const AdminTable=()=>{
  const params = useParams();
  const [detail,setDetail] = useState("")

  // useEffect(()=>
  // {
  //   fetch(`http://localhost:4000/user/${params.table}/`)
  //   .then((result)=>
  //    {
  //      result.json()
  //      .then((resp)=>{
  //        console.log("result",resp) 
  //        setDetail(resp) 
  //      })
  //    });
  // },[])

  useEffect(()=>{
    console.log(params.table)
    if(params.table=="student")
    {
      console.log("useeffect")
      fetch(`http://localhost:4000/user/${params.table}/`)
      .then(res=>res.json())
      .then((resp)=>{
        console.log("result",resp) 
        setDetail(resp) 
      })
    }
    else if(params.table=="instructor")
    {
      fetch(`http://localhost:4000/user/${params.table}/`)
      .then(res=>res.json())
      .then((resp)=>{
        console.log("result",resp) 
        setDetail(resp) 
      })
    }
    else if(params.table=="courses")
    {
      fetch(`http://localhost:4000/${params.table}/popular`)
      .then(res=>res.json())
      .then((resp)=>{
        console.log("result",resp) 
        setDetail(resp) 
      })
    }
    else if(params.table=="enrollments")
    {
      fetch(`http://localhost:4000/enroll/filter/`)
      .then(res=>res.json())
      .then((resp)=>{
        console.log("result",resp) 
        setDetail(resp) 
      })
    }
  },[])

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
          {params.table=="student" ? 
                   <tr>
                   <th scope="col">Id.</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr> : 
                    params.table=="instructor" ?
                    <tr>
                    <th scope="col">Id.</th>
                     <th scope="col">First</th>
                     <th scope="col">Last</th>
                     <th scope="col">Handle</th>
                     </tr> : 
                    params.table=="courses" ?
                    <tr>
                    <th scope="col">Id.</th>
                     <th scope="col">Course Title</th>
                     <th scope="col">Category</th>
                     <th scope="col">Total Enrollments</th>
                     <th scope="col">Handle</th>
                     </tr> : 
                      params.table=="enrollments" ?
                      <tr>
                        <th scope="col">Id.</th>
                        <th scope="col">Course Title</th>
                        <th scope="col">User Id</th>
                        <th scope="col">Status</th>
                        <th scope="col">Handle</th>
                        </tr> : <></>
          }
        
      </thead>
      <tbody>
        {detail.map((entry)=>
      <tr>
      {params.table=="student" ? 
        <>
        <td scope="col">{entry._id}</td>
        <td scope="col">{entry.fname}</td>
        <td scope="col">{entry.lname}</td>
        <td scope="col">Handle</td>
        </> : 
        params.table=="instructor" ?
        <>
        <td scope="col">{entry._id}</td>
          <td scope="col">{entry.userData[0].fname}</td>
          <td scope="col">{entry.userData[0].lname}</td>
          <td scope="col">Handle</td>
          </> : 
        params.table=="courses" ?
        <>
        <td scope="col">{entry._id}</td>
          <td scope="col">{entry.title}</td>
          <td scope="col">Category</td>
          <td scope="col">{entry.enrollments}</td>
          <td scope="col">Handle</td>
          </> : 
          params.table=="enrollments" ?
          <>
            <td scope="col">{entry._id}</td>
            <td scope="col"></td>
            <td scope="col">User Id</td>
            <td scope="col">Status</td>
            <td scope="col">Handle</td>
            </> : <></>
          }
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
