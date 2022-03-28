import Layout from "./Layout";
import logowithtagline from '../logowithtagline.png';
import logo from '../logo.svg';
import {Link} from "react-router-dom";

function AboutUs() {
    return (
        <Layout>
            <div className="pt-lg-10 pt-5 footer bg-white">
                <div className="text-center"> 
                <div className=" fs-2 fw-bold">About Edulogy</div>
                <img src={logowithtagline}/>
                </div>
                <div className="fs-4 ">
                    Edulogy is an E-Learning Platform for educational content and resources that offers a student everything they need in one place. We believe everyone is a student in anyway and knowledge must be accessible to everyone. Anyone can register to our platform and access tons of premium quality courses and get knowledge. 
                </div>

                <div> 
                <div className="text-center fs-2 fw-bold">Vision</div>
                <div className="fs-4 ">
                    Knowledge roots the Analytical thinking which will help students to explore new posiibilities and Critical thinking which helps them to take right decisions. 
                </div>
                </div>

                <div> 
                <div className="text-center fs-2 fw-bold">Mission</div>
                <div className="fs-4 ">
                   To provide education that is accessible to everyone that helps them learn news skill and cultivate their future.
                </div>
                </div>

                <div> 
                <div className="text-center fs-2 fw-bold">Values</div>
                <div className="fs-4 text-center">
                    Innovation <br/>
                    Excellence <br/>
                    Teamwork <br/>
                    Quality <br/>
                </div>
                </div>
            </div>
        </Layout>
    );
}

export default AboutUs;