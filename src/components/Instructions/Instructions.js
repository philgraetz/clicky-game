import React from 'react';
import './Instructions.css';

const Instructions = (props) => (
    <div className="container instructions-container my-0 pb-1">
        <p className="instructions">
            {props.message}
        </p>
    </div>
)

export default Instructions;