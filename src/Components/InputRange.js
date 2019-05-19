import React, { useState } from "react";

const InputRange = ({ label, min, max, step, value, handleChange }) => {
    const [input, setInput] = useState(value);

    const onChange = val => {
        setInput(val);
        handleChange(val);
    };
    return (
        <div className="range-input-wrap">
            {label !== "" ? (
                <div className="range-input-label">{label.toUpperCase()}</div>
            ) : (
                ""
            )}
            <input
                type="range"
                className="range-input"
                min={min}
                max={max}
                step={step}
                value={input}
                onChange={e => onChange(e.target.value)}
                onBlur={e => onChange(e.target.value)}
            />
        </div>
    );
};

export default InputRange;
