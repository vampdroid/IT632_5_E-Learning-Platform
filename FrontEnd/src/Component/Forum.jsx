import React from "react";
import script from "./script.jsx";
//import fscript from "./commentBox.js";
//import "./commentBoxStyle.css";
import Header from "./Header";
import "../Styles/style.css";
const Forum=()=>{
    return(
        <>
            <Header/>
        <center><h2 class="mt-4">Page Title</h2></center><br/>
        <div className="doubts">
            <input type="text" className="form-control df" placeholder="Enter Your Doubts Here" />
            <button className="doubtsubmit">Submit</button>
        </div>
        <script  defer type="module" src="script.js"></script>
            <div className="container">
                <div className="comments">
                    <comment-box level="0"></comment-box>
                </div>
            </div>
        </>
    )}
    export default Forum;