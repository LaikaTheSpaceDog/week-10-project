import React from 'react';
import { Form } from "react-bootstrap";

const Password = ({ label, value, valid, handleChange }) => (
    <>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>{ label }</Form.Label>
            <Form.Control 
                onChange={ handleChange } 
                value={ value } 
                type="password" 
                placeholder="Password" 
                style={{ border: valid ? "black 1px solid" : "red 5px solid" }} />
        </Form.Group>
    </>

);

export default Password;