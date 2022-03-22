import React from "react";
import "./Main.css";
import te from '../../Assets/purp.jpg';
import slid2 from '../../Assets/red.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
const Landing=()=>{
    return(
        <div className="main" style={{ display: 'block', padding: 30 ,height:'600px'}}>  
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
    </div>
    )
}
export default Landing;