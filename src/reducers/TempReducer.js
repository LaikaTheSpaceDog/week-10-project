import React, {useReducer} from "react";

const initialState = {
    celsius: 0,
    fahrenheit: 32
}
    
const celsiusChange = (state, { value }) => {
    return {
        ...state,
        celsius: value,
        fahrenheit: (value * 1.8 + 32).toFixed(2),
    };
};

const fahrenheitChange = (state, { value }) => {
    return {
        ...state,
        celsius: ((value - 32) / 1.8).toFixed(2),
        fahrenheit: value,
    };
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CELSIUS_CHANGE": return celsiusChange(state, action);
        case "FAHRENHEIT_CHANGE": return fahrenheitChange(state, action);
        default: return state;
    }
}

const TempReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { celsius, fahrenheit } = state;

    return (
        <>
            <h2>Temp Reducer</h2>
            <div className="form-group mt-4">
                <label>Celsius</label>
                <input type="number" className="form-control" onChange={ (e) => dispatch({ type: "CELSIUS_CHANGE", value: e.currentTarget.value}) } value={ celsius } />
            </div>
            <div className="form-group">
                <label>Fahrenheit</label>
                <input type="number" className="form-control" onChange={ (e) => dispatch({ type: "FAHRENHEIT_CHANGE", value: e.currentTarget.value}) } value={ fahrenheit } />
            </div>
        </>
    )
}

export default TempReducer;