import React from "react";
import { Route, Routes } from "react-router-dom";

// import Categories from "../../Categories/Categories";
import Profcour from "./Component/Courses/Courses";
import CoursePage from "./Component/CoursesPage/CoursePage";
import Home from "./Component/Home/Home";

import InsCour from "./Component/InsCourse/InsCourse";

import Passedit from "./Component/Passedit/Passedit";
import Profedit from "./Component/Profedit/Profedit";

// import VisProfile from "./Component/ViewInsCourse/ViewInsCourse";

const Rout = () => {
  return (
    <Routes>
      <Route path="/home" exact element={<Home />} />
      <Route path="/InsCourse" element={<InsCour />} />
      <Route path="/Profcour" element={<Profcour />} />
      <Route path="/Profile-edit" element={<Profedit />} />
      <Route path="/Password-edit" element={<Passedit />} />
      <Route path="/Courses" element={<CoursePage />} />
      {/* <Route path="/Categories" element={<Categories />} /> */}
    </Routes>
  );
};

export default Rout;
