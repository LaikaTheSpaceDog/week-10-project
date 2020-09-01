import React, { Component } from "react";

import Square from "./Square";

class Squares extends Component {
    constructor(props){
        super(props);

        this.state = {
            selected: 1
        }
    }

    render(){
        return(            
            <>
                <h2>Squares Challenge</h2>
                <div style={{ display: "flex" }}>
                    <Square color="hotpink" name="first" selected={ this.state.selected === 1 } handleClick={ () => this.setState({ selected: 1 }) }/>
                    <Square color="hotpink" name="second" selected={ this.state.selected === 2 }  handleClick={ () => this.setState({ selected: 2 }) }/>
                </div>
            </>
        )
    }

}

export default Squares;