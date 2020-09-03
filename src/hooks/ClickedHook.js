import React, { useState } from "react";

const ClickedHook = () => {
    const [clicked, setClicked] = useState(false);

    const updateClicked = () => setClicked(true);

    return (
        <>
            <h2>Clicked Hook</h2>
            { clicked === false ? <p onClick={ updateClicked }>Not clicked</p> :
            <p onClick={ updateClicked }>Clicked</p>} 
        </>
    )
}

export default ClickedHook;