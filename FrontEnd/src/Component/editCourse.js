// import React from "react";
// import {useState} from "react";
// import "../Styles/editCourse.css";
// import 'bootstrap/dist/css/bootstrap.css';
// //import {faUpload} from '@fortawesome/free-solid-svg-icons';
// import {getfname} from "./uploadfile";
// //import { light } from "material-icons-react/dist/config/mappings";
// const editCourse=()=>{
    
//     const [video,setvideo] = useState([]);
//     const initialState =
//     {
//       title:"",
//       description:"",
//       video:"",
//       content:""
//     }
  
//     const handleChange = (ev) => {
//       let { name, value } = ev.target;
//       if(name === "video"){
//         const files = Array.from(ev.target.files)
//         console.log(files)
//         setthumbnail(files)
//         console.log(video)
  
//       }
//       setCourse({
//         ...course,
//         [name]: value,
//       });
//     };
//     const[ctitle,setCtitle] = useState('');
//     const[cvideo,setCvideo]=useState('');
//     const[cdesc,setCdesc]=useState('');
//     const[ccontent,setCcontent]=useState('');
  
//     async function editCourse(event)
//     {
  
//       const token = localStorage.getItem('token')
//     //   if(!token)
//     //   {
//     //     window.location.href = '/login'
//     //   }
//       event.preventDefault()
//       let formData = new FormData();
//       const video = document.getElementById("file-input");
//       formData.append("thumbnail",video[0]);
//       formData.append("title",ctitle);
//       formData.append("description",cdesc);
//     //   formData.append("content",content);
//       const result = await fetch('http://localhost:4000/course/625eee802cc42fc68002963a/add', {
//         method: 'POST',
//         headers:
//             {
//               'accept': 'application/json',
//               'authorization':`Bearer ${token}`
//             },
//         body: formData,
//       })
//       alert(result)
//       const data = await result.json();
//       if(data.email){
//         alert("Course Edited Successfully")
//         window.location.href = '/editCourse'
//       }
//       else{
//         alert("Course Not Edited")
//       }
//       console.log("result",data);
//     }
  
//         function makeCopy() 
//         {
//                 var copy = <input type="text"/>;
//                 return copy;
//         }
//         function add_field()
//         {
            
//             var newtd = document.createElement('span');

//             newtd.className="text-light";
//             var newtd1 = document.createElement('br');
            
//             newtd.appendChild(newtd1);
            
          
            
//             var newtd1 = document.createTextNode(document.getElementById('t1').value);
            
//             newtd.appendChild(newtd1);
            
//            return document.getElementById("d").appendChild(newtd);

           
//         }



//         function showFileName( ) 
//         {
//             // the change event gives us the input it occurred in 
//             var input = document.getElementById('file-input');
            
//             console.log(input.files);
//             // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
//             var fileName = input.files[0].name;
//            var h = document.getElementById('fname');
//            var t = document.createTextNode(fileName);
//            h.appendChild(t);
//             //alert(fileName);
//             // use fileName however fits your app best, i.e. add it into a div
//            //infoArea.textContent = 'File name: ' + fileName;
//         }
        
    
//     return(
        
//         <div>
//             <div class="main1">
//                 <div className="col1" id="d">
//                 <center><h2 className="text-light mt-2">List Of Content</h2></center><hr/>
//                 <input type="text" id="t1"></input>
                
//                 <input type="button" id="addtxt" value="+" onClick={add_field}/>
//                 <br></br>
                   
//                     <span className="text-light">Introduction
//                     </span>
                    
                
//                 </div>
                
//                 <div className="col2">
//                     <div class="editContent">
//                         <input  className="form-control  control save" type="text" value={ctitle} onChange={(e) =>setCtitle(e.target.value)}  placeholder="Enter Title Of Course"/>
//                         <button className="savebtn text-light" >Save</button>
//                     </div>
//                     <div className="descArea">
//                     <label htmlFor="file-input" className="fileinput">
//                             <input type="file" id="file-input" className="uploadfile" onChange={showFileName}/>
                            
//                             <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png" value={cvideo} onChange={(e) =>setCvideo(e.target.value)} classname="fileup" width="150px"/><br/>
//                             Upload Your Video Here!
//                         </label><h1 id="fname"></h1><br/><br/><br/><br/>
                        
//                         <div id="file-upload-filename"></div>
//                         <hr/>
//                     <div className="txtarea">
//                         <textarea rows="10" cols="100" className="area" value={cdesc} onChange={(e) =>setCdesc(e.target.value)}  placeholder="Enter Your Course Description"></textarea>
//                     </div>
//                     </div>
                    
                    
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default editCourse;