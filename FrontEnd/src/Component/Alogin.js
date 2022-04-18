import './Alogin.css';
function Alogin() {
  return (
    <>
    
    <body className="amain">
    <div className="acontainer" >
      <div className="asignup" >
    <form className="row g-3 needs-validation" novalidate>
      
   <center> <h2>Admin Login</h2></center>
  <div className="col-md-12">
    {/* <label for="validationCustom01" className="form-label">First name</label> */}

    <input placeholder='Enter Email Id' type="text" className="form-control" id="validationCustom01"  required/>
  </div>
  <div className="col-md-12">
    {/* <label for="validationCustom01" className="form-label">First name</label> */}

    <input placeholder='Enter Password' type="password" className="form-control" id="validationCustom01"  required/>
  </div>
  
  
  <div className="col-md-12">
    <center><button className="btn1 btn2" type="submit" >Login</button></center>
  </div>
  
</form>
</div>
</div>
</body>

    </>
  );
}

export default Alogin;