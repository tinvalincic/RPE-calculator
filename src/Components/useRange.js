import React, { useState, useEffect } from "react";
import InputRange from "./InputRange";

const useRange = (label, min, max, step, value) => {
    const [state, setState] = useState(value);
    const id = `use-range-${value}-${Math.floor(Math.random() * 10000) + 1}`;

    useEffect(() => {
        console.log("Rerendam se");
    });

    const Range = ({ handleChange }) => {
        console.log(handleChange);

        return (
            <div className="range-input-wrap" id={id}>
                <p>State: {state}</p>
                <div className="range-input-label">{label.toUpperCase()}</div>
                <InputRange
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    handleChange={handleChange}
                />
            </div>
        );
    };

    return [state, Range, setState];
};

export default useRange;
