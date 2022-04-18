import {Link} from "react-router-dom";
import js from '../Assets/js.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';
// import '../Styles/Layout.css';
const Layout=()=> {

    return (
        <div>
            
            <nav className="navbar sticky-top navbar-expand-md  navbar-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={js} width="40" height="28"
                             alt="Edulogy logo"
                             className="d-inline-block align-text-top"/>
                        Edulogy
                    </Link>
                    <div className=" d-flex order-md-last ms-auto ">
                        <Link to="#" className="dropdown" id="UserDropDown"
                              role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={js} width="40" height="28"
                                 alt="Edulogy logo"
                                 className="d-inline-block align-text-top"/>
                        </Link>
                        <div className="dashboard-dropdown mt-2 me-3 py-0 dropdown-menu dropdown-menu-end navbar-dark"
                             aria-labelledby="UserDropDown">
                            <span className="pt-4 m-3 text-center">name</span>
                            <Link to="/login" className="mt-3 dropdown-item">Become an instructor</Link>
                            <Link to="/login" className="mt-3 dropdown-item">Login</Link>
                            <Link to="/register" className="mt-3 dropdown-item">Register</Link>
                            <Link to="/Profcour" className="mt-3 dropdown-item">Profile</Link>
                        </div>
                    </div>
                    <button className="navbar-toggler collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#toggleMobileMenu"
                            aria-controls="toggleMobileMenu"
                            aria-expanded="false"
                            aria-label="Toogle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="toggleMobileMenu">
                        <ul className="navbar-nav me-auto text-start">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item dropdown">

                                <Link to="#" className="nav-link dropdown-toggle" id="CourseDropDown"
                                      role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                >Courses</Link>

                                <ul className="dropdown-menu" aria-labelledby="CourseDropDown">
                                    <li><Link to="/" className="dropdown-item">Categories</Link></li>
                                    <li><Link to="/" className="dropdown-item">Categories</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/aboutus" className="nav-link" href="#">About us</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <input className="btn btn-outline-light" type="submit" value="Search"/>
                        </form>
                    </div>


                </div>

            </nav>
        </div>
    );
}

export default Layout;