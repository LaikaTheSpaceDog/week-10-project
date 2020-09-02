import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Password2 from "./Password2";

class SignUp2 extends Component {
    constructor(props){
        super(props);

        this.state = {
            input1: "",
            input2: ""
        }
    }

    render(){
        
        let { minimumLength } = this.props;
        let { input1, input2 } = this.state;
        
        return(            
            <>
                <h2>Sign Up: Second Attempt</h2>
                <Form>
                    <Password2 
                        value={ input1 } 
                        label={ "Password" } 
                        valid={ (input1 === input2) && (input1.length > minimumLength) } 
                        handleChange={ (e) => this.setState({ input1: e.currentTarget.value }) } />
                    <Password2 
                        value={ input2 } 
                        label={ "Confirm Password" } 
                        valid={ (input1 === input2) && (input2.length > minimumLength) } 
                        handleChange={ (e) => this.setState({ input2: e.currentTarget.value }) }/>
                </Form>
            </>
        );
    }

}

export default SignUp2;