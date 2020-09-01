import React from 'react';

const Square = ({ color, selected, handleClick }) => (

    <>
        <div style={ selected ? {backgroundColor: `${color}`, width: 200, height: 200 } : { backgroundColor: "green", width: 200, height: 200 } } onClick={ handleClick }></div>
    </>

);

export default Square;