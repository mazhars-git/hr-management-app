import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const MainMenu = () => {
    return (
        <div>
            <Navbar bg="danger" variant="light" expand="lg">
            <Container>
            <Navbar.Brand href="/home">HR</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/addEmployee">Add Employee</Nav.Link>
                    <Nav.Link href="/mail">Mail</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default MainMenu;