//import logo from './logo.svg';
// import './App.css';
import './add-course.css';
function addCourse() {
  return (
    <>
    <body className="main">
    <div className="container" >
      <div className="signup" >
    <form className="row g-3 needs-validation" novalidate>
      
   <center> <h2>Add Your Course Here</h2></center>
  <div className="col-md-12">
    {/* <label for="validationCustom01" className="form-label">First name</label> */}

    <input placeholder='Enter Course Title' type="text" className="form-control" id="validationCustom01"  required/>
  </div>
  
  <div className="col-md-12">
    {/* <label for="validationCustomUsername" className="form-label">Email</label> */}
    <div className="input-group has-validation"> 
      <input placeholder='Enter Course Description' type="text-area" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/><br/>
      
    </div>
  </div>
  <div className="col-md-12">
    {/* <label for="validationCustom03" className="form-label">City</label> */}
    <input placeholder='Enter Course Thumbnail' type="file" className="form-control" id="validationCustom03" required/>
    
  </div>
  
  <div className="col-md-12">
    <center><button className="btn1 btn2" type="submit" >Add Course</button></center>
  </div>
  
</form>
</div>
</div>
</body>
    </>
  );
}

export default addCourse;