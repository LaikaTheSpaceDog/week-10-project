import React from 'react';

const Square = ({ color, selected, handleClick }) => (

    <>
        <div style={{backgroundColor: selected ? color : "green", width: 200, height: 200 }} onClick={ handleClick }></div>
    </>

);

export default Square;