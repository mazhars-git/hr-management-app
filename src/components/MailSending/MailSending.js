import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import MainMenu from '../MainMenu/MainMenu';

const MailSending = () => {
    return (
        <div>
            <MainMenu></MainMenu>
            <Container>
                <h1 className="text-center">Email to Employee</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" required />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="body">
                        <Form.Label>Email Body</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default MailSending;