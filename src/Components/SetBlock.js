import React, { useState } from "react";
import InputRange from "./InputRange";

const SetBlock = ({ weight, handleReps, handleRpe }) => {
    const [reps, setReps] = useState(1);
    const [rpe, setRpe] = useState(6);

    const changeReps = value => {
        setReps(value);
        handleReps(value);
    };
    const changeRpe = value => {
        setRpe(value);
        handleRpe(value);
    };

    return (
        <div className="block-wrap">
            <div className="description-wrap">
                <div className="block-label">SET</div>
                <div className="calculated-values">
                    {weight}x{reps}@{rpe}
                </div>
            </div>
            <InputRange
                label="reps"
                min={1}
                max={10}
                step={1}
                value={1}
                handleChange={changeReps}
            />
            <InputRange
                label="rpe"
                min={6}
                max={10}
                step={0.5}
                value={6}
                handleChange={changeRpe}
            />
        </div>
    );
};

export default SetBlock;
