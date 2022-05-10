//import logo from './logo.svg';
import '../App.css';
import './AdminPanel'
import AdminPanel from './AdminPanel';
import React from 'react'; 

const AdminTable=()=>{
  return(
  <div className="main">
          <div className="left"><AdminPanel/></div>
          <div className="right"><Table/></div>
      </div>
  );
}


function Table() {
  return (
    <>

    <body>
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
              <th scope="col">no.</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
</body>
    </>
  );
}

export default AdminTable;
