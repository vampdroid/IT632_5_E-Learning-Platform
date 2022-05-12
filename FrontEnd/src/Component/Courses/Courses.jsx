import React, { useEffect, useState } from "react";
import js from "../Assets/js.png";
import Show from "../Showcase/Showcase";
import "./Courses.css";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import Header from "../Header";

const Profcour = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(async () => {
    await fetch("http://localhost:4000/enroll/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        setEnrolledCourses(data);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="main">
        <div className="left">
          <Show />
        </div>
        <div className="right">
          <>
            <div className="col-lg- col-12">
              <h5 className="mb-0 head">Courses: </h5>
              <div className="rounded shadow  booklist1">
                {enrolledCourses &&
                  enrolledCourses.length > 0 &&
                  enrolledCourses.map((mycourse, index) => {
                    return (
                      <div className=" col-md-4 col-12 mt-4 ms-2 mb-3">
                        <Link to={`/course-detail/${mycourse._id}`} className="Link">
                          <div className="card border-0 work-container work-classic inscourse">
                            <div className="card-body p-0">
                              <img
                                src={js}
                                // src={mycourse?.thumbnail}
                                className="img-fluid rounded work-image"
                                alt=""
                              />
                              <div className="content pt-3 incourse">
                                <h5 className="mb-0">{mycourse?.course}</h5>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Profcour;
