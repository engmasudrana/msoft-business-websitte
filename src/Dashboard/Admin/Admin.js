import React, {useContext, useEffect, useState} from 'react';
import { Nav, Navbar, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from "../../images/msoftlogo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faTasks, faHome, faShoppingBag, faPlusSquare, faPowerOff, faShoppingCart, faCommentDots} from "@fortawesome/free-solid-svg-icons";
import {userContext} from "../../route/AppRoute";
import './Admin.css';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [state, setState] = useState({
        sideNavClass:"sidenavOpen"
    })

    const [adminEmail, setAdminEmail] = useState({})
    useEffect(()=>{
        fetch(`https://salty-refuge-88167.herokuapp.com/admin/${loggedInUser.email}`)
    .then(res => res.json())
        .then(data => setAdminEmail(data))
    },[loggedInUser.email])

    if (loggedInUser.email === adminEmail.email) {
        return (
            <>
                <Navbar  expand="lg" fixed="top" className="mb-5 navBg" variant="light">
                    <Link to="/"> <img src={Logo} alt=""/></Link>
                    <Nav  className="mr-auto"> </Nav>
                    <Nav className="loginBtn">
                        <h6 className="mt-3 text-secondary"> {loggedInUser.name || loggedInUser.displayName}</h6>
                        <h6> <img className="user-image ml-2 mt-1" src={loggedInUser.photo} alt="" /></h6>
                    </Nav>
                    <div className={state.sideNavClass}>
                        <NavLink> <Link className="NavItem" to="/"> <FontAwesomeIcon icon={faHome} /> Home</Link></NavLink>
                        <NavLink> <Link className="NavItem" to="/orderList"> <FontAwesomeIcon icon={faShoppingBag} /> Order List</Link></NavLink>
                        <NavLink><Link className="NavItem" to="/addService"> <FontAwesomeIcon icon={faPlusSquare} /> AddService</Link></NavLink>
                        <NavLink><Link className="NavItem" to="/makeAdmin"> <FontAwesomeIcon icon={faUser} /> Make Admin</Link></NavLink>
                        <NavLink><Link className="NavItem" to="/manageService"> <FontAwesomeIcon icon={faTasks} /> Manage Service</Link></NavLink>
                        <NavLink onClick={() => setLoggedInUser({})}><Link className="NavItem" to="/"> <FontAwesomeIcon icon={faPowerOff} /> SignOut</Link></NavLink>
                    </div>
                </Navbar>
            </>
        );
    }
    else {
        return (
            <>
                <Navbar  expand="lg" fixed="top" className="mb-5 navBg" variant="light">
                    <Link to="/"> <img src={Logo} alt=""/></Link>
                    <Nav  className="mr-auto"> </Nav>
                    <Nav className="loginBtn">
                        <h6 className="mt-3 text-secondary"> {loggedInUser.name || loggedInUser.displayName}</h6>
                        <h6> <img className="user-image ml-2" src={loggedInUser.photo} alt="" /></h6>
                    </Nav>
                    <div className={state.sideNavClass}>
                        <NavLink> <Link className="NavItem" to="/"> <FontAwesomeIcon icon={faHome} /> Home</Link></NavLink>
                        <NavLink> <Link className="NavItem" to="/book/:id"> <FontAwesomeIcon icon={faShoppingCart} /> Book</Link></NavLink>
                        <NavLink><Link className="NavItem" to="/bookingList"> <FontAwesomeIcon icon={faShoppingBag} /> Booking List</Link></NavLink>
                        <NavLink><Link className="NavItem" to="/review"> <FontAwesomeIcon icon={faCommentDots} /> Review</Link></NavLink>
                        <NavLink onClick={() => setLoggedInUser({})}><Link className="NavItem" to="/"> <FontAwesomeIcon icon={faPowerOff} /> SignOut</Link></NavLink>
                    </div>
                </Navbar>
            </>
        );
    }
};

export default Admin;