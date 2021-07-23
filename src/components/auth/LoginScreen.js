import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/Styles.css'
export const LoginScreen = () => {
    return (
        <>
            <Form >
                <Form.Group className="mb-3 col-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control 
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        autoComplete="off"
                        // value={email}
                        // onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3 col-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        autoComplete="off"
                        // value={password}
                        // onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Container className="auth__social-networks">
                    <Container
                        className="google-btn"
                        // onClick={handleLoginGoogle}
                        >
                        <Container className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google button"
                            />
                        </Container>
                    </Container>
                </Container>
            </Form>
        </>
    )
}
