import React from 'react';
import { Form } from "react-bootstrap";

const Password2 = ({ valid, value, label, handleChange }) => (

    <>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>{ label }</Form.Label>
            <Form.Control onChange={ handleChange } value={ value } valid={ valid } style={ valid ? { border: "black 1px solid" } : { border: "red 5px solid" } } ></Form.Control>
        </Form.Group>
    </>

);

export default Password2;