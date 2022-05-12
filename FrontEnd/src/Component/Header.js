import logo from '../logo.svg';
import {Link, NavLink} from "react-router-dom";
import '../Styles/Layout.css'
import React, {useEffect} from 'react';
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
    const user = JSON.parse(localStorage.getItem('user'));
    const [categories , setCategory] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:4000/category')
            .then(res => res.json())
            .then(res=>{
                console.log(res);
                setCategory(res);
            })
    },[])

    const categoriesList = categories ? categories.map(category=>{
        return  <a className="dropdown-item" href={`/category/${category._id}`}>{category.name}</a>
    }) : null


    const userLogin = ()=>{
        const logout = ()=>{
            localStorage.removeItem('token')
            window.location.href='/login'
        }
        if(token){
            return (
                <>
                    <NavLink className="dropdown-item" to="/profile">Your Profile</NavLink>
                {/* <NavLink className="dropdown-item" to="/Profile-edit">Update Profile</NavLink>
                    <NavLink className="dropdown-item" to="/Password-edit">update password</NavLink> */}
                    {JSON.parse(localStorage.getItem("user"))?.role==='stu'?
                    <NavLink className="dropdown-item" to="/instructor-detail">Become A Mentor</NavLink>
                    :null}
                    <button className="dropdown-item" onClick={()=>logout()} >Logout</button>      
                </>
            )
        }
        else {
           return ( <><NavLink className="dropdown-item" to="/login">Login</NavLink>
            <NavLink className="dropdown-item" to="/register">Register</NavLink></>)
        }
    }



    const adminDropDown = ()=>{
        if(token && user.role==="admin"){
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
                        <NavItem>
                            <NavLink className="nav-link" to="/courses">Courses</NavLink>
                        </NavItem>
                        {adminDropDown()}
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            {categoriesList}
                        </NavDropdown>
                        <NavItem>
                            <NavLink className="nav-link" to='/aboutus'>Aboutus</NavLink>
                        </NavItem>

                    </Nav>
                    <Form className="d-flex" action='http://localhost:3000/courses'>
                        <FormControl
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            name="search"
                        />
                        <Button variant="outline-light" id="SearchButton" type='submit'>
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </div>
        </Navbar>
    
    )
}

export default Header;