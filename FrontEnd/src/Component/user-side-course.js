import React from "react";
import "./user-side-course.css";
import 'bootstrap/dist/css/bootstrap.css';
import {faUpload} from '@fortawesome/free-solid-svg-icons';

const usersidecourse=()=>{
    
    return(
        
        <div>
            <div class="mainu1">
                <div className="colu1">
                <center><h2 className="text-light mt-2">List Of Content</h2></center><hr/>
                <ul>
                    <li className="text-light">Introduction</li>
                </ul>
                </div>
                
                <div className="colu2">
                    <div class="editContentu">
                        <p><h1 className="save display-5 mt-3 text-success">Our Title</h1></p>
                        {/* <input  className="form-control  control save" type="text" placeholder="Enter Title Of Course"/> */}
                        <button className="savebtnu mt-2">Course Discussion</button>
                    </div>
                    <div className="descArea">
                        
                    <center><iframe className="cvid mt-3" width="400rem" height="270rem" src="https://www.youtube.com/embed/Rezetez59Nk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
                    
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
export default usersidecourse;