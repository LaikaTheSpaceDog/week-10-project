import React, {useReducer} from "react";

const initialState = {
    clicked: false,
};

const click = state => {
    return {
        ...state,
        clicked: true,
    }
}

const reducer = (state, action) => {
    switch (action.type){
        case "CLICK": return click(state);
        default: return state;
    }
};

const ClickedReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { clicked } = state;

    return (
        <>
            <h2>Clicked Reducer</h2>
            <p onClick={ () => dispatch({ type: "CLICK" }) }>{ clicked ? "Clicked" : "Not clicked" }</p>
        </>
    )
}

export default ClickedReducer;