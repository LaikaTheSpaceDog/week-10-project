import React, { useState } from "react";

const StepHook = ({ step, max }) => {
    const [counter, setCounter] = useState(step);

    const counterUp = () => { 
        if( counter <  max ) {
            setCounter(counter + step)
        }
    }

    const counterDown = () => { 
        if( counter > 0 ) {
            setCounter(counter - step)
        }
    }

    return (
        <>
        <h2>Step Hook</h2>
        <p>{counter >= max || counter <= 0 ? "Limit reached" : "Step Counter"}</p>
        <p>{ counter }</p>
                <button onClick={ counterDown }>-</button>
                <button onClick={ counterUp }>+</button>
        </>
    )
}

export default StepHook;