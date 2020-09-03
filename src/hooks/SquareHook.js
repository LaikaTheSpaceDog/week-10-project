import React, { useState } from "react";

const SquareHook = ({ colour }) => {
    const [toggled, setToggled] = useState(false);

    const updateToggled = () => setToggled(!toggled);

    return (
        <>
            <h2>Square Hook</h2>
            {toggled === false ? <div style={{backgroundColor: "green", width: 200, height: 200 }} onClick={ updateToggled }></div> :
            <div style={{backgroundColor: `${colour}`, width: 200, height: 200 }} onClick={ updateToggled }></div>}
        </>
    )
}

export default SquareHook;