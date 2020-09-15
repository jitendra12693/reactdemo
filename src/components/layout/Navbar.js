import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <span className="navbar-brand">React Demo</span>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="about">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " exact to="/contact">Contact Us</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-3 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    {/* <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button> */}
                </form>
            </div>
            <NavLink className="btn btn-outline-light" to="/users/add">Add User</NavLink>
        </nav>
    )
}

export default Navbar