import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Rout from "./Rout";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Layout from "./Component/Layout";
import AboutUs from "./Component/AboutUs";
import Home from './Component/Home/Home';
import { useEffect,useState } from 'react';

import Profile from "./Component/Profedit/Profedit";
import Profcour from "./Component/Courses/Courses";
import CourseList from "./Component/CoursesPage/CoursePage";
import CourseDetail from "./Component/Course-page";
import EditCourse from "./Component/EditCourse2";
import InsCour from "./Component/InsCourse/InsCourse";
import Discussion from "./Component/Forum";
import Passedit from "./Component/Passedit/Passedit";
import AddCourse from "./Component/add-course";
import CourseContent from "./Component/CourseContent";
import AdminPanel  from './Component/AdminPanel';
import AdminTable from './Component/Admintable';
import StudentTable from './Component/StudentAdmin';
import InstructorTable from './Component/InstructorAdmin';
import CourseTable from './Component/CourseAdmin';
import CategoryTable from './Component/CategoryAdmin';
import EnrollmentTable from './Component/EnrollmentAdmin';
import AdminLogin from './Component/Alogin';
// import AboutUs from './Component/AboutUs';
import Verify_Account from './Component/Verify_Account';
import Reset_password from './Component/reset-password';
import CoursePageForCategory from "./Component/CoursesPage/CoursePageForCategory";
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path='/instructor-course' element={<InsCour />}/>
          <Route path='/Profcour' element={<Profcour/>}/> */}
          <Route path='/change-password'  element={<Passedit/>}/>
          <Route path='/courses' element={<CourseList />}/>
          <Route path='/category/:categoryId' element={<CoursePageForCategory />}/>
          <Route path='/course-detail/' element={<CourseDetail />}/>
          <Route path='/course-detail/:id' element={<CourseDetail />}/>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/discuss-course" element={ <Discussion/>} />
          <Route path='/user/verify-account/:resetToken/:userid' element={ <Verify_Account /> }/>
          {/* Instructors */}
          <Route path="/add-course" element={ <AddCourse/>} />
          <Route path="/edit-course" element={ <EditCourse/>} />
          <Route path="/edit-course/:id" element={ <EditCourse/>} />
          <Route path="/course-content/:id" element={ <CourseContent/>} />
          {/* Admin */}
          <Route path="/admin-login" element={ <AdminLogin/>} />
          <Route path="/admin-panel" element={ <AdminPanel/>} />
          <Route path="/admin-table/student" element={ <StudentTable/>} />
          <Route path="/admin-table/instructor" element={ <InstructorTable/>} />
          <Route path="/admin-table/courses" element={ <CourseTable/>} />
          <Route path="/admin-table/category" element={ <CategoryTable/>} />
          <Route path="/admin-table/enrollments" element={ <EnrollmentTable/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/dashboard" element={<adminDashboard />} />
          <Route path="/resetPassword" element={<resetPassword/>} />
        </Routes>
        <Rout />

      </BrowserRouter>
    </div>
  );
}

export default App;
