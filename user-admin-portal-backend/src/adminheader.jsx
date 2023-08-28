import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";


function AdminHeader() {
    
    const navigate = useNavigate();


    function logOut() {
        localStorage.clear();
        navigate('/');
    }

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
                <Navbar fixed="top" />
                <Container>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto col-md-12 d-flex align-items-center justify-content-end">

                            <NavDropdown title= "Admin"  id="basic-nav-dropdown"  >
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

export default AdminHeader;