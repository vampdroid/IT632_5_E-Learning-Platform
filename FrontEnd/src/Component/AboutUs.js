import Layout from "./Layout";
import logo from '../logo.svg';
import {Link} from "react-router-dom";

function AboutUs() {
    return (
        <Layout>
            <div className="pt-lg-10 pt-5 footer bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mb-4">
                                <img src={logo} width="100px" alt="logo" />
                                <div className="mt-4">
                                    <p>Geek is feature-rich components and beautifully Bootstrap UIKit for developers, built with bootstrap responsive framework.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 offset-lg-1">
                            <div className="mb-4">
                                <h3 className="fw-bold mb-3">Company</h3>
                                <ul className="nav nav-footer flex-column nav-x-0 list-unstyled">
                                    <li><Link to="#" className="nav-link">About</Link>
                                    </li>
                                    <li><Link to="#" className="nav-link">Pricing</Link>
                                    </li>
                                    <li ><Link to="#" className="nav-link">Blog</Link>
                                    </li>
                                    <li><Link to="#" className="nav-link">Careers</Link>
                                    </li>
                                    <li ><Link to="#" className="nav-link">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="mb-4">
                                <h3 className="fw-bold mb-3">Support</h3>
                                <ul className="nav nav-footer flex-column nav-x-0 list-unstyled">
                                    <li>
                                        <Link to="#" className="nav-link">Help and Support</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="#">Become Instructor</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="#">Get the app</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="#">FAQ’s</Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link" to="#">Tutorial</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="mb-4">
                                <h3 className="fw-bold mb-3">Get in touch</h3>
                                <p>339 McDermott Points Hettingerhaven, NV 15283</p>
                                <p className="mb-1">Email:
                                    <Link to="#">support@geeksui.com</Link>
                                </p>
                                <p>Phone:
                                    <span className="text-dark fw-semi-bold">(000) 123 456 789</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AboutUs;