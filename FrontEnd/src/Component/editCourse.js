import React from "react";
import "./editCourse.css";
import 'bootstrap/dist/css/bootstrap.css';
import {faUpload} from '@fortawesome/free-solid-svg-icons';
import {getfname} from "./uploadfile";
const editCourse=()=>{
    
    return(
        
        <div>
            <div class="main1">
                <div className="col1">
                <center><h2 className="text-light mt-2">List Of Content</h2></center><hr/>
                <ul>
                    <li className="text-light">Introduction</li>
                </ul>
                </div>
                
                <div className="col2">
                    <div class="editContent">
                        <input  className="form-control  control save" type="text" placeholder="Enter Title Of Course"/>
                        <button className="savebtn text-light">Save</button>
                    </div>
                    <div className="descArea">
                    <label htmlFor="file-input" className="fileinput">
                            <input type="file" id="file-input" className="uploadfile" />
                            <div id="fname"></div>
                            <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png" classname="fileup" width="150px"/><br/>
                            Upload Your Video Here!
                        </label><br/><br/><br/><br/>
                        <hr/>
                    <div className="txtarea">
                        <textarea rows="10" cols="100" className="area" placeholder="Enter Your Course Description"></textarea>
                    </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
export default editCourse;