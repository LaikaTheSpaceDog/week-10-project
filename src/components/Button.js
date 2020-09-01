import React, { Component } from 'react';

class Button extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        let current = this.state.counter;
        let { handleUpdate } = this.props;
        this.setState({counter: current + 1 })
        handleUpdate(this.state.counter);
    }

    render() {

        return (
            <>
                <h2>Button Challenge</h2>

                <button onClick={ this.handleClick }>Click</button>
        
            </>
        );
    }
}

export default Button;