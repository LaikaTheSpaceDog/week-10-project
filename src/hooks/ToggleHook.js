import React, { useState } from "react";

const ToggleHook = ({ initial, alternate }) => {
    const [toggled, setToggled] = useState(false);

    const updateToggled = () => setToggled(!toggled);

    return (
        <>
        <h2>Toggle Hook</h2>
        {toggled === false ? <p onClick={ updateToggled }>{ initial }</p> : <p onClick={ updateToggled }>{ alternate }</p>}
        </>
    )
}

export default ToggleHook;