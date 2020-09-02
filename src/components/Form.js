import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: ""
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);

    }

    handleChange1(e) {
        this.setState({name: e.currentTarget.value});
    }

    handleChange2(e) {
        this.setState({email: e.currentTarget.value});
    }

    handleButtonClick(e) {
        e.preventDefault()
        let { handleSubmit } = this.props;
        handleSubmit({...this.state});
        this.setState({ name: "" })
        this.setState({ email: "" })
    }

    render() {

        return (
            <>
                <h2>Form Challenge</h2>
                <form className="container">
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" type="text" onChange={ this.handleChange1 } value={ this.state.name } />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" onChange={ this.handleChange2 } value={ this.state.email } />
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={ this.handleButtonClick }>Click</button>
                </form>
            </>
        );
    }
}

export default Form;