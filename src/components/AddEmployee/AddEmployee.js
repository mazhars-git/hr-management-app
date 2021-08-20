import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import MainMenu from '../MainMenu/MainMenu';

const AddEmployee = () => {

    return (
        <div>
            <MainMenu></MainMenu>
            <Container>
                <h3 className="text-center pt-3">Added Employee : </h3>
                <Form>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Control type="text" placeholder="First Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Control type="text" placeholder="Last Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control type="file" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddEmployee;