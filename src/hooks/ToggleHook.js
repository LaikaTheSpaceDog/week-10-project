import React, { useState } from "react";

const ToggleHook = ({ initial, alternate }) => {
    const [toggled, setToggled] = useState(false);

    const updateToggled = () => setToggled(!toggled);

    return (
        <>
        <h2>Toggle Hook</h2>
        <p onClick={ updateToggled }>{ toggled ? alternate : initial }</p>
        </>
    )
}

export default ToggleHook;