import React, { useState, useEffect } from "react";
import InputRange from "./InputRange";

const PercentageBlock = ({ weight }) => {
    const [calculatedWeight, setCalculatedWeight] = useState(weight);
    const [percentage, setPercentage] = useState(100);

    const changePercentage = value => {
        setPercentage(value);
        const calculated = (weight * value) / 100;
        setCalculatedWeight(calculated);
    };

    useEffect(() => {
        changePercentage(percentage);
    }, [weight]);

    return (
        <div className="block-wrap percentage-block-wrap">
            <div className="description-wrap">
                <div className="block-label">PERCENTAGE</div>
                <div className="calculated-values">
                    {percentage}% of {weight}={calculatedWeight}
                </div>
            </div>
            <InputRange
                label=""
                min={60}
                max={120}
                step={1}
                value={percentage}
                handleChange={changePercentage}
            />
        </div>
    );
};

export default PercentageBlock;
