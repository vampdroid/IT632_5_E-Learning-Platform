import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import logo from '../logowithtagline.png';
import '../Styles/certificate.css';

//import "./styles.css";
const ref = React.createRef();

function Certificate() {
  return (
    <div className="App">

      <div ref={ref}>
        <div className="maindiv">
          <div className="container112">
            <img src={logo} className="logopic" alt="logo" />
            <div className="assignment">
              proudly presents this
            </div>
            <div className="marquee">
              Certificate of Completion
            </div>
            <p>to</p>


            <div className="person">
              Vishwa
            </div>

            <div className="reason">
              for the dedication and hard work that resulted in the successful culmination of the course
            </div>

            <div className="coursename">
              Basics of JavaScript
            </div>
            <div className="reason">
              Your achievement will be remembered and your accuracy will be cherished by Edulogy.
            </div>
          </div>
          <div className="container113">
            <div className="insidecontainer113"><br />
              <h1 className="hiiheader">Congratulations!</h1><br /><br />
              <p> With all your hardwork and dedication, you have successfully completed our course. You have been assigned a certificate of completion from Edulogy. You can preview it and can also download it.</p>
              <center>
                <Pdf targetRef={ref} filename="CompletionCertificate.pdf">
                  {({ toPdf }) => <button className="btn1" onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
              </center>< br/>
              <p> Enroll into more interesting courses of Edulogy to Enhance your skills and always</p><br />
              <h1 id="h100">Keep Learning!</h1>
            </div>
          </div>
        </div><br />
      </div>

    </div>
  );
}


export default Certificate;