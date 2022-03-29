import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AboutIns from "./Component/AboutIns/AboutIns";
import AddCourse from "./Component/Addcourse/Addcourse";
import Categories from "./Component/Categories/Categories";
import CourseDetail from "./Component/CourseDetail/CourseDetail";
import Profcour from "./Component/Courses/Courses";
import CoursePage from "./Component/CoursesPage/CoursePage";
import EditCourse from "./Component/EditCourse/EditCourse";
import Owldemo1 from "./Component/Home/Home";
import InsCour from "./Component/InsCourse/InsCourse";
import InVisProfile from "./Component/InVisProfile/InVisProfile";
import Login from "./Component/Login/Login";
import Passedit from "./Component/Passedit/Passedit";
import Profedit from "./Component/Profedit/Profedit";
import Register from "./Component/Register/Register";
import Usersidecourse from "./Component/UserCoursePage/UserCoursePage";
import ViewCourse from "./Component/ViewInsCourse/ViewInsCourse";
import VisProfile from "./Component/ViewInsCourse/ViewInsCourse";

const Rout=()=>{
    return(
        <Routes>
            <Route  path='/' index element={<Owldemo1 />} />
            <Route path='/register' element ={<Register/>}/>
            <Route path='/login'  element={<Login />} />
            <Route path='/InsCourse' element={<InsCour />}/>
            <Route path='/Profcour' element={<Profcour/>}/>
            <Route path='/Profile-edit'  element={<Profedit/>}/>
            <Route path='/Password-edit'  element={<Passedit/>}/>
            <Route path='/Courses' element={<CoursePage />}/>
            <Route path='/CourseDetail' element={<CourseDetail/>}/>
            <Route path='/Categories' element={<Categories/>}/>
            <Route path='/Addnew' element={<AddCourse/>}/>
            <Route path='/EditCourse' element={<EditCourse/>}/>
            <Route path='/CourseContent' element={<Usersidecourse/>}/>
            <Route path='/AboutIns' element={<AboutIns/>}/>
            <Route path='/InVisProfile' element={<InVisProfile/>}/>
            <Route path='/ViewCourse' element={<ViewCourse/>}/>

        </Routes>
    )
}


export default Rout;