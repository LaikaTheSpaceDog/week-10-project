import React, { useState } from "react";

const CounterHook = ({ initial, max }) => {
    const [counter, setCounter] = useState(initial);

    const counterUp = () => { 
        if( counter <  max ) {
            setCounter(counter + 1)
        }
    }

    const counterDown = () => { 
        if( counter > 0 ) {
            setCounter(counter - 1)
        }
    }

    return (
        <>
        <h2>Counter Hook</h2>
        <p>{counter >= max || counter <= 0 ? "Limit reached" : counter}</p>

                <button onClick={ counterDown }>-</button>
                <button onClick={ counterUp }>+</button>
        </>
    )
}

export default CounterHook;