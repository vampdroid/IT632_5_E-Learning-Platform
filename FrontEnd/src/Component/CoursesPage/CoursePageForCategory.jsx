import React from "react";
import js from "../Assets/js.png";
// import '../Home/Home.css';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link, useLocation, useParams} from "react-router-dom";
import Header from "../Header";
import {useState} from "react";
import {useEffect} from "react";
import courses from "../Courses/Courses";

const CoursePageForCategory=()=>{
    const [courseList,setCourse] = useState(null)
    const [category,setCategory] = useState(null);
    const Category = useParams().categoryId;
    useEffect(()=>{
        fetch(`http://localhost:4000/category/${Category}`)
            .then((result)=>
            {
                result.json()
                    .then((resp)=>{
                        console.log("result",resp)
                        setCourse(resp.courses)
                        setCategory(resp)
                    })
            })
    },[])
    return(

        <div className="content-fluid">
            <Header/>
            <br/>
            <section className="section-two bg-light mb-5" id="bookroom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">

                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
            </section>

            <div className="booklist">
                {courseList!=null?courseList.map((course) =>
                    <Link to='/CourseDetail' className="Link">
                        <div class="card courses-desc overflow-hidden rounded shadow border-0">
                            <div class="position-relative d-block overflow-hidden">
                                <img src={"data:image/"+course.contentType+";base64,"+course.thumbnail?.toString("base64")} class="img-fluid rounded-top mx-auto" alt=""/>
                                <div class="overlay-work bg-dark"></div>
                                <a href="javascript:void(0)" class="text-white h6 preview">Preview Now <i class="uil uil-angle-right-b align-middle"></i></a>
                            </div>
                            <div class="card-body">
                                <h5>{course.title}</h5>
                                <div class="fees d-flex justify-content-between">
                                    {/*{category?.userData[0]?.fname}*/}
                                    <h6>{category?.userData[0]?.fname} {category?.userData[0]?.lname}</h6>

                                </div>
                            </div>
                        </div>
                    </Link>
                ):null}
            </div>


        </div>

    )
}
const disp=()=>{
    let arr=[];
    for(let i=0;i<9;i++)
    {
        arr.push(
            <Link to='/CourseDetail' className="Link">
                <div class="card courses-desc overflow-hidden rounded shadow border-0">
                    <div class="position-relative d-block overflow-hidden">
                        <img src={js} class="img-fluid rounded-top mx-auto" alt=""/>
                        <div class="overlay-work bg-dark"></div>
                        <a href="javascript:void(0)" class="text-white h6 preview">Preview Now <i class="uil uil-angle-right-b align-middle"></i></a>
                    </div>

                    <div class="card-body">
                        <h5>Program</h5>
                        <div class="fees d-flex justify-content-between">
                            <h6>Instructor Name</h6>
                            <h7>Date</h7>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
    return arr;
}
let Inside=()=>{
    let arr=[];
    for(let i=0;i<5;i++)
    {
        arr.push(
            <Link className="Link" to='/CourseDetail'>
                <div className="outer card">
                    <img className="img" src={js} alt="" />
                    <h3>
                        Introduction to js
                    </h3>
                    <h4>
                        Instructor
                    </h4>
                </div>
            </Link>)
    }
    return arr;
}
export default CoursePageForCategory;
