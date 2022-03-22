import React from "react";
import "./Course.css";
import tech from "../../Assets/tech.jpg";
import te from '../../Assets/purp.jpg';
import slid2 from '../../Assets/red.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const Course=()=>{
    return(
        <div>   
            <div className=" p-2 p-lg-3 mb-2 mb-lg-4 shadow-sm br-sm">
                            <div className="input-group inp">
                                <input type="text"  placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                                
                                    <button className="btnn" type="button" >Search</button>
                           
                            </div>
                        </div>
    <div className="main" style={{ display: 'block', padding:30,height:'400px'}}> 
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 img1"
src={te}
            alt="Image One"
          />
          <Carousel.Caption className="CC fw-bold">
            <h1>JavaScript !</h1>
            <p>Make your website responsive!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 img1"
src={slid2}
            alt="Image Two"
          />
          <Carousel.Caption className="CC fw-bold">
            <h1>CSS made easy</h1>
            <p>Lear the basic concepts of the CSS and master it!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        
    <h2>Courses:</h2>
    {disp()}     
    </div>
    </div>
    )
}

const disp=()=>{
    let arr=[];
    for(let i=0;i<5;i++)
    {
        arr.push( <div className="card border-0 mb-2 mb-lg-4 ">
                            <div className="row align-items-center">
                                <div className="col-5">
                                    <div className="card-image">
                                        <img src={tech} className="card-img-top" alt="Product image"/>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="px-3 px-lg-4 py-3 py-lg-4">
                                        <h4>
                                            <a href="#">Correta</a>
                                        </h4>
                                        <div className="d-none d-xl-block mb-4">
                                            <p>Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue.</p>
                                        </div>
                                        <div>
                                            <span>$490 <s>$877</s></span>
                                        </div>
                                        <div className="pt-4 d-none d-lg-block">
                                            <a href="#" className="btn btn-primary">
                                                Get Enrolled!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
    }
    return arr;
}
export default Course;