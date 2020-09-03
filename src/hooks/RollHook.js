import React, { useState } from "react";


const RollHook = ({ names }) => {
    const [index, setIndex] = useState(0);

    const updateIndex = () => {
        if( index < (names.length - 1)) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }
    return (
        <>
        <h2>Roll Hook</h2>
        <p>{names[index]}</p>
        <button onClick={ updateIndex }>Next</button>
        </>
    )
}

export default RollHook;