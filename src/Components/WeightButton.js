import React from "react";

const WeightButton = ({ weight, action, handleClick }) => {
    return (
        <button onClick={() => handleClick(weight)}>
            {action}
            {weight}
        </button>
    );
};

export default WeightButton;
