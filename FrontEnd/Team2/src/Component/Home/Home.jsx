import React from "react";
import js from "../Assets/js.png";
import '../Home/Home.css';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";

const Owldemo1 =()=> {   
          return (   
       <div class='container-fluid' >            
        <OwlCarousel items={3}  
          className="owl-theme" loop={true} nav 
          >  
           {Inside()} 
      </OwlCarousel>  

       <Categories/>
        <br />
        <div className="Flexdes" data-aos="fade-up">
            <Book />
            <Book1 />
            <Book2 />
        </div >

        <br/>
        <br/>
        <section class="section">
        <div class="container">
            <header class="mb-4 mb-lg-6 text-center ">
                <h2>Did we get your attention?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, molestias quidem ut rem unde.</p>
            </header>
    
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div class="row">
                        <div class="col-lg-6" data-aos="fade-right" >
                            <div class="box box-image box-hover bg-white box-border br-sm mb-4">
                                <div class="box-content">
                                    <div class="d-flex pt-4">
                                        <div>
                                            <div class="h2 mb-0">1000+</div>
                                            <p>Projects</p>
                                            <small>Architecto officiis ipsa quaerat laudantium, qui quibusdam accusamus.</small>
                                        </div>
                                        <FontAwesomeIcon width={"5em"} icon={faDatabase}/>
                                    </div>
                                </div>
                            </div>
                            <div class="box box-image box-hover bg-white box-border br-sm mb-4">
                                <div class="box-content">
                                    <div class="d-flex pt-4">
                                        <div>
                                            <div class="h2 mb-0">400+</div>
                                            <p>Happy clients</p>
                                            <small>Architecto officiis ipsa quaerat laudantium, qui quibusdam accusamus.</small>
                                        </div>
                                        <FontAwesomeIcon width={"5em"} icon={faSmile}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 pt-0 pt-lg-5 " data-aos="fade-left">
                            <div class="box box-image box-hover bg-white box-border br-sm mb-4">
                                <div class="box-content">
                                    <div class="d-flex pt-4">
                                        <div>
                                            <div class="h2 mb-0">20k</div>
                                            <p>Working hours</p>
                                            <small>Architecto officiis ipsa quaerat laudantium, qui quibusdam accusamus.</small>
                                        </div>
                                        <FontAwesomeIcon width={"5em"} icon={faClock}/>
                                    </div>
                                </div>
                            </div>
    
                            <div class="box box-image box-hover bg-white box-border br-sm mb-4">
                                <div class="box-content">
                                    <div class="d-flex pt-4">
                                        <div>
                                            <div class="h2 mb-0">10</div>
                                            <p>Years</p>
                                            <small>Architecto officiis ipsa quaerat laudantium, qui quibusdam accusamus.</small>
                                        </div>
                                         <FontAwesomeIcon width={"5em"} icon={faLayerGroup}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </div>  
  
   
          )  
        }          

        const Book=()=>{
  return(
    <div className="Book">
        <div className="Book-inside"><FontAwesomeIcon width={"2em"} icon={faPersonChalkboard}/></div>
        <h3 className="mt-2 Book-inside2">
        Learn from best Instructors</h3>
    </div>
  );
}
const Book1=()=>{
  return(
    <div className="Book">
        <div className="Book-inside"><FontAwesomeIcon width={"2em"} icon={faCertificate}/></div>
        <h3 className="mt-2 Book-inside2 ">
        Get Certification</h3>
    </div>
  );
}
const Book2=()=>{
  return(
    <div className="Book">
        <div className="Book-inside"><FontAwesomeIcon width={"2em"} icon={faChartLine}/></div>
        <h3 className="mt-2 Book-inside2 ">
        Reach new heights</h3>
    </div>
  );
}
const Sub=()=>{
  return(
    <div className="Book1">
        <div className="Book-inside"><FontAwesomeIcon width={"2em"} icon={faPlane}/></div>
        <h3 className="mt-2 Book-inside2">
        Physics</h3>
    </div>
  );
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

export default Owldemo1;