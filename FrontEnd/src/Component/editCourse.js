
// export default EditCourse = ()=>{
//     const initialState = {
//         title: "",
//         description: "",
//         video: "",  
//         content: "",
//       };
//     const params = useParams();
//     const [idx,setIdx] = useState(0);
//     const [courseDetails, setCourseDetails] = useState(initialState);
//     useEffect( () => {
//         alert(params.id)
//         const user = JSON.parse(localStorage.getItem('user'))
//         if(!user)
//         {
//           window.location.href='login'
//         }
//         const url = `http://localhost:4000/courses/${params.id}`;
//         fetch(url, {
//           method: "GET",
//           headers: {
//               Accept:"application/json",
//             "Content-Type": "application/json",
//           },
//         })
//           .then((res) =>  res.json())
//           .then((data) => {
          
//           if(data[0].userData._id == user._id){
//             alert('you are not instructor of this course');
//             window.location.href='/'
//           }
//             setCourseDetails(data?.[0])
//             // for (let i in data[0].Contents) {
//             //   console.log(data[0].Contents[i].title);
    
//             //   var t = document.createElement("span");
//             //   var b = document.createElement("br");
//             //   t.className = "text-light";
//             //   var tx = document.createTextNode(data[0].Contents[i].title);
//             //   id = document.createTextNode(data[0].Contents[i].id);
//             //   contentString += data[0].Contents[i].title;
//             //   t.appendChild(tx);
//             //   t.appendChild(b);
//             //   document.getElementById("d").appendChild(t);
//             // }
//           });
//       }, []);
    

//       return (
//         <div>

//         <div className="main1">
  
//            <div className="col1" id="d">
//             <SideContentList  />
//             {/* <span className="text-light">Introduction</span> */}
//           </div>
//           <div className="col2">
//             <div className="editContent">
//               <input
//                 className="form-control  control save"
//                 type="text"
//                 id="title"
//                 name="title"
//                 value={courseDetails?.[idx]}
//               //   onChange={handleChange}
//                 placeholder="Enter Title Of Course"
//               />
//               <h2>{courseDetails?.Contents?.[idx]?.title}</h2>
  
//               <button className="savebtn text-light" onClick={insertContent}>
//                 Save
//               </button>
//             </div>
//             <div className="descArea">
//               <label htmlFor="file-input" className="fileinput">
//                 <input
//                   type="file"
//                   id="video"
//                   name="video"
//                   value={courseDetails.video}
//                   className="uploadfile"
//                   onChange={handleChange}
//                 />
//                 <img
//                   src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png"
//                   value={courseDetails.video}
//                   onChange={handleChange}
//                   className="fileup"
//                   width="150px"
//                 />
//                 <br />
//                 Upload Your Video Here!
//               </label>
//               <h1 id="fname"></h1>
//               <br />
//               <br />
//               <br />
//               <br />
  
//               <div id="file-upload-filename"></div>
//               <hr />
//               <div className="txtarea">
//                 <textarea
//                   rows="10"
//                   cols="100"
//                   id="description"
//                   name="description"
//                   className="area"
//                   value={courseDetails?.Contents?.[idx].description}
//                   onChange={handleChange}
//                   placeholder="Enter Your Course Description"
//                 ></textarea>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       )
// }

// const SideContentList = (courseDetails)=>{

//     return (
//         <>
//         <center>
//               <h1 className="text-light mt-2">{courseDetails.title}</h1>
//               <h2 className="text-light mt-2">List Of Content</h2>
//             </center>
//             <hr />
//             <input
//               type="text"
//               id="content"
//               name="content"
//               value={courseDetails.title}
//               onChange={handleChange}
//             ></input>
  
//             <input type="button" id="addtxt" value="+" onClick={add_field} />
//             <br></br>
//             <ul>
//                       {courseDetails.Contents?.map((chapterName,index)=>{
//                       // console.log(chapterName,"i99dgaf");
//                       return (
//                       <li key = {index} className="text-light">
                          
//                           <button onClick={()=>{setIdx(index)}} className="buttonEditCourse">{chapterName.title}</button>
//                            </li>
//                       )
//                       })}
//                   </ul>
//             </>
//     )
// }


// const ContentUpdate = ()=>{

// }