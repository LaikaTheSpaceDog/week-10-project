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
        const { handleUpdate } = this.props;
        const { counter } = this.state;
        const updatedCount = counter + 1;
        this.setState({
            counter: updatedCount
        });
        handleUpdate(updatedCount);
    }

    render() {

        return (
            <>
                <h2>Button Challenge</h2>

                <button className="btn btn-primary" onClick={ this.handleClick }>Click</button>
        
            </>
        );
    }
}

export default Button;