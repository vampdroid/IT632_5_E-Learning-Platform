import logo from '../logo.svg';
import {Link, NavLink} from "react-router-dom";
import '../Styles/Layout.css'
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

    return(
        <Navbar variant="dark" sticky="top" expand="md">
            <div className="container-fluid">
                <NavbarBrand href='/'>
                    <img src={logo} width="40" height="28"
                                   alt="Edulogy logo"
                                   className="d-inline-block align-text-top"/>
                    Edulogy
                </NavbarBrand>
                <NavDropdown title={
                    <Link to="#" className="dropdown" id="UserDropDown"
                          role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={logo} width="40" height="28"
                             alt="Edulogy logo"
                             className="d-inline-block align-text-top"/>
                    </Link>
                } className=" d-flex order-md-last ms-auto" id="dropdown-menu-align-end" align="end">
                    <NavLink className="dropdown-item" to="/">Name</NavLink>
                    <NavDropdown.Divider />
                    <NavLink className="dropdown-item" to="/login">Login</NavLink>
                    <NavLink className="dropdown-item" to="/register">Register</NavLink>
                </NavDropdown>
                <NavbarToggle aria-controls="navbarOpen"  />
                <Navbar.Collapse id="navbarOpen">
                    <Nav  className="me-auto my-2 my-lg-0"  style={{ maxHeight: '100px' }}>
                        <NavItem>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </NavItem>
                        <NavDropdown title="Link" id="collasible-nav-dropdown">
                            <NavLink className="dropdown-item" to="/">Home</NavLink>
                            <NavLink className="dropdown-item" to="/aboutus">Action</NavLink>
                            <NavLink className="dropdown-item" to="/">Another action</NavLink>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
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