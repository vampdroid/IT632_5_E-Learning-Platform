import logo from '../logo.svg';
import {Link, NavLink} from "react-router-dom";
import '../Styles/Layout.css'
import React from 'react';
import {useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Form,
    InputGroup,
    FormControl,
    Button,
    NavDropdown
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";

function Header(){
    const token = localStorage.getItem('token');


    const userLogin = ()=>{
        if(token){
            return (
                <>
                    <NavLink className="dropdown-item" to="/profile">Your Profile</NavLink>
                {/* <NavLink className="dropdown-item" to="/Profile-edit">Update Profile</NavLink>
                    <NavLink className="dropdown-item" to="/Password-edit">update password</NavLink> */}
                    <button className="dropdown-item" onClick={()=>logout()} >Logout</button>                </>
            )
        }
        else {
           return ( <><NavLink className="dropdown-item" to="/login">Login</NavLink>
            <NavLink className="dropdown-item" to="/register">Register</NavLink></>)
        }
    }

    const courseDropDown =()=>{
        if(token){
           return <NavDropdown title="Course" id="collasible-nav-dropdown">
             
            <NavLink className="dropdown-item" to="/courses">Courses</NavLink>
            <NavLink className="dropdown-item" to="/Courses">Courses</NavLink>
            
            <NavDropdown.Divider />
                <NavLink className="dropdown-item" to="/course-detail">CourseDetail</NavLink>
                <NavLink className="dropdown-item" to="/add-course">AddCourse</NavLink>
                <NavLink className="dropdown-item" to="/edit-course">editCourse</NavLink>
                <NavLink className="dropdown-item" to="/course-content">CourseContent</NavLink>
            </NavDropdown>
        }
    }


    const adminDropDown = ()=>{
        if(token){
        return  <NavDropdown title="Admin" id="collasible-nav-dropdown">
                    <NavLink className="dropdown-item" to="/dashboard">Dashboard</NavLink>
                <NavDropdown.Divider />
                    <NavLink className="dropdown-item" to="/admin-login">admin Login</NavLink>
                    <NavLink className="dropdown-item" to="/admin-panel">Admin Panel</NavLink>
                    <NavLink className="dropdown-item" to="/admin-table">Admin Table</NavLink>
            </NavDropdown>
        }
    }

    const instructorDropDown = ()=>{

        if(token){
            return <NavDropdown title="Instructor" id="collasible-nav-dropdown">
                        <NavLink className="dropdown-item" to="/Profcour">My courses</NavLink>
                    <NavDropdown.Divider />
                        <NavLink className="dropdown-item" to="/InsCourse">Instructor courses</NavLink>
                        <NavLink className="dropdown-item" to="/admin-panel">Admin Panel</NavLink>
                        <NavLink className="dropdown-item" to="/admin-table">Admin Table</NavLink>
                </NavDropdown>
        }

    }

    return(
        <Navbar variant="dark" sticky="top" expand="md">
            <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
                    Edulogy
            </NavLink>
                <NavDropdown title={
                    <Link to="#" className="dropdown" id="UserDropDown"
                          role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={logo}
                        style={{width:"40px",height:"28px"}} 
                             alt="Edulogy logo"
                             className="d-inline-block align-text-top"/>
                    </Link>
                } className=" d-flex order-md-last ms-auto" id="dropdown-menu-align-end" align="end">
                    {userLogin()}
                </NavDropdown>
                <NavbarToggle aria-controls="navbarOpen"  />
                <Navbar.Collapse id="navbarOpen">
                    <Nav  className="me-auto my-2 my-lg-0 ">
                        <NavItem>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </NavItem>
                        {courseDropDown()}
                        {adminDropDown()}
                        <NavItem>
                            <NavLink className="nav-link" to='/aboutus'>Aboutus</NavLink>
                        </NavItem>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <Button variant="outline-light" id="SearchButton">
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </div>
        </Navbar>
    
    )
}

export default Header;