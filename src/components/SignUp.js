import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Password from "./Password";

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            input1: "",
            input2: ""
        }
    }
    
    render(){

        const { minimumLength } = this.props;
        const { input1, input2 } = this.state;

        return(            
            <>
                <h2>Password Challenge</h2>
                <Form>
                    <Password 
                        label="Password" 
                        handleChange={ (e) => this.setState({input1: e.currentTarget.value}) }
                        value={ input1 } 
                        valid={ (input1 === input2) && (input1.length > minimumLength) }
                    />
                    
                    <Password 
                        label="Confirm Password" 
                        handleChange={ (e) => this.setState({input2: e.currentTarget.value}) } 
                        value={ input2 }
                        valid={ (input1 === input2) && (input2.length > minimumLength) }
                    />
                </Form>
            </>
        )
    }

}

export default SignUp;