import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Header() {

    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve user info from local storage
        const storedUserInfo = localStorage.getItem('user-info');

        if (storedUserInfo) {
            const parsedUserInfo = JSON.parse(storedUserInfo);
            setUserInfo(parsedUserInfo[0]); // Assuming you're only interested in the first entry
            console.log(userInfo);
        }
    }, []);



    function logOut() {
        localStorage.clear();
        navigate('/');
    }


    //let user = JSON.parse(localStorage.getItem('user-info'));
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
                <Navbar fixed="top" />
                <Container>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto col-md-12 d-flex align-items-center justify-content-end">

                            <NavDropdown title={ userInfo.first_name + " " + userInfo.last_name} id="basic-nav-dropdown"  >
                                <NavDropdown.Item href="#action/3.1"> Change password </NavDropdown.Item>
                                <NavDropdown.Item onClick={logOut} href="#action/3.2"> Log out </NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action/3.3"> Something</NavDropdown.Item> <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4"> Separated link </NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
}

export default Header;