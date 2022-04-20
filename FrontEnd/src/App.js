import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Rout from "./Rout";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Layout from "./Component/Layout";
import AboutUs from "./Component/AboutUs";
import Profile from "./Component/Profedit/Profedit";
import Profcour from "./Component/Courses/Courses";
import CoursePage from "./Component/CoursesPage/CoursePage";

import InsCour from "./Component/InsCourse/InsCourse";

import Passedit from "./Component/Passedit/Passedit";
import AddCourse from "./Component/add-course";
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/instructor-course' element={<InsCour />}/>
          <Route path='/Profcour' element={<Profcour/>}/>
          <Route path='/change-password'  element={<Passedit/>}/>
          <Route path='/courses' element={<CoursePage />}/>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/add-course" element={ <AddCourse/>} />
        </Routes>
        <Rout />

      </BrowserRouter>
    </div>
  );
}

export default App;
