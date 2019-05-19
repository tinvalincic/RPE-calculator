import React, { useState, useEffect } from "react";
import InputRange from "./InputRange";
import rpeScale from "./rpeScale";

const PredictedSetBlock = ({ weight, reps, rpe }) => {
    const [predictedWeight, setPredictedWeight] = useState(weight);
    const [predictedReps, setPredictedReps] = useState(reps);
    const [predictedRpe, setPredictedRpe] = useState(rpe);

    const changeReps = value => {
        setPredictedReps(value);
        changePredictedWeight(value, predictedRpe);
    };
    const changeRpe = value => {
        setPredictedRpe(value);
        changePredictedWeight(predictedReps, value);
    };
    const changePredictedWeight = (predictedReps, predictedRpe) => {
        const rpePercentage = rpeScale[reps][rpe];
        const predictedRpePercentage = rpeScale[predictedReps][predictedRpe];
        const calculation =
            (predictedWeight * rpePercentage) / predictedRpePercentage;
        setPredictedWeight(
            calculation % 1 === 0 ? calculation : calculation.toFixed(1)
        );
    };

    useEffect(() => {
        setPredictedWeight(weight);
        setPredictedReps(reps);
        setPredictedRpe(rpe);
    }, [weight, reps, rpe]);

    return (
        <div className="block-wrap predicted-block-wrap">
            <div className="description-wrap">
                <div className="block-label">PREDICTED SET</div>
                <div className="calculated-values">
                    {predictedWeight}x{predictedReps}@{predictedRpe}
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

export default PredictedSetBlock;
