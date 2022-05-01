import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Rout from "./Rout";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Layout from "./Component/Layout";
import AboutUs from "./Component/AboutUs";
import Home from './Component/Home/Home';

import Profile from "./Component/Profedit/Profedit";
import Profcour from "./Component/Courses/Courses";
import CourseList from "./Component/CoursesPage/CoursePage";
import CourseDetail from "./Component/Course-page";
import EditCourse from "./Component/editCourse";
import InsCour from "./Component/InsCourse/InsCourse";
import Discussion from "./Component/Forum";
import Passedit from "./Component/Passedit/Passedit";
import AddCourse from "./Component/add-course";
import CourseContent from "./Component/CourseContent";
import AdminPanel  from './Component/AdminPanel';
import AdminTable from './Component/Admintable';
import AdminLogin from './Component/Alogin';

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
          <Route path='/course-detail/:id' element={<CourseDetail />}/>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/discuss-course" element={ <Discussion/>} />
          {/* Instructors */}
          <Route path="/add-course" element={ <AddCourse/>} />
          <Route path="/edit-course" element={ <EditCourse/>} />
          <Route path="/course-content/:id" element={ <CourseContent/>} />
          {/* Admin */}
          <Route path="/admin-login" element={ <AdminLogin/>} />
          <Route path="/admin-panel" element={ <AdminPanel/>} />
          <Route path="/admin-table" element={ <AdminTable/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/dashboard" element={<adminDashboard />} />
        </Routes>
        <Rout />

      </BrowserRouter>
    </div>
  );
}

export default App;
