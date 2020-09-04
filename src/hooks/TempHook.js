import React, { useState } from "react";

const TempConverter = () => {
    const [celsius, setCelsius] = useState("0");
    const [fahrenheit, setFahrenheit] = useState("32");

    const handleChangeCelsius = (e) => {
        let value = +e.currentTarget.value;
        setCelsius(`${value}`);
        setFahrenheit((value * 1.8 + 32).toFixed(2));
    };

    const handleChangeFahrenheit = (e) => {
        let value = +e.currentTarget.value;
        setFahrenheit(`${value}`);
        setCelsius(((value - 32) / 1.8).toFixed(2));
    }

    return (
        <>
            <div className="form-group mt-4">
                <label>Celsius</label>
                <input type="number" className="form-control" onChange={ handleChangeCelsius } value={ celsius } />
            </div>
            <div className="form-group">
                <label>Fahrenheit</label>
                <input type="number" className="form-control" onChange={ handleChangeFahrenheit } value={ fahrenheit } />
            </div>
        </>
    );
}

export default TempConverter;