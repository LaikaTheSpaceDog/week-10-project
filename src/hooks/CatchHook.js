import React, { useState } from "react";
import { Button } from 'react-bootstrap';


const StepHook = ({ jump }) => {
    const [counter, setCounter] = useState(0);

    const updateCounter = () => setCounter(counter + jump)

    return (
        <>
        <h2>Catch Hook</h2>
        <Button onClick={ updateCounter } style={{position: "relative", top: counter}}>Catch me!</Button>
        </>
    )
}

export default StepHook;