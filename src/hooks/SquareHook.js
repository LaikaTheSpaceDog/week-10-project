import React, { useState } from "react";

const SquareHook = ({ colour }) => {
    const [toggled, setToggled] = useState(false);

    const updateToggled = () => setToggled(!toggled);

    return (
        <>
            <h2>Square Hook</h2>
            <div style={{ backgroundColor: toggled ? `${colour}` : "green", width: 200, height: 200 }} onClick={ updateToggled }></div>
        </>
    )
}

export default SquareHook;