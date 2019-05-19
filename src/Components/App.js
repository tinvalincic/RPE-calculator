import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import SetBlock from "./SetBlock";
import PredictedSetBlock from "./PredictedSetBlock";
import PercentageBlock from "./PercentageBlock";

const App = () => {
    const [weight, setWeight] = useState(0);
    const [action, setAction] = useState("+");
    const [reps, setReps] = useState(1);
    const [rpe, setRpe] = useState(6);

    const changeWeight = newWeight => {
        let calcWeight =
            action == "+" ? weight + newWeight : weight - newWeight;
        setWeight(calcWeight);
    };

    const changeReps = value => {
        setReps(value);
    };

    const changeRpe = value => {
        setRpe(value);
    };

    const toggleAction = () => {
        setAction(action === "+" ? "-" : "+");
    };

    return (
        <div>
            <Header
                handleClick={changeWeight}
                handleActionToggle={toggleAction}
                action={action}
            />
            <SetBlock
                weight={weight}
                handleReps={changeReps}
                handleRpe={changeRpe}
            />
            <PredictedSetBlock weight={weight} reps={reps} rpe={rpe} />
            <PercentageBlock weight={weight} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
