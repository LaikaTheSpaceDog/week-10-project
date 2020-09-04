import React, {useReducer} from "react";

const initialState = {
    counter: 0
};

const stepUp = (state, { step, max }) => {
    return state.counter < max ? { 
            ...state,
            counter: state.counter + step,
            } : state;
    }

const stepDown = (state, { step }) => {
    return state.counter > 0 ? {
            ...state,
            counter: state.counter - step,
        } : state;
}

const reducer = (state, action) => {
    switch (action.type) {
        case "COUNT_UP": return stepUp(state, action);
        case "COUNT_DOWN": return stepDown(state, action);
        default: return state;
    }
}

const StepReducer = ({ step, max }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { counter } = state;

    return (
        <>
            <h2>Step Reducer</h2>
            {/* <p>{counter >= max || counter <= 0 ? "Limit reached" : "Step Counter"}</p> */}
            <p>{ counter }</p>
            <button onClick={ () => dispatch({ type: "COUNT_DOWN", step: step, max: max }) }>-</button>
            <button onClick={ () => dispatch({ type: "COUNT_UP", step: step, max: max }) }>+</button>
        </>
    )

}

export default StepReducer;
