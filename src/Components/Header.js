import React from "react";
import WeightButton from "./WeightButton";

const Header = ({ handleClick, handleActionToggle, action }) => {
    const actionButtons = [2.5, 5, 10, 20, 50];
    return (
        <div className="action-buttons">
            {actionButtons.map(value => (
                <WeightButton
                    weight={value}
                    action={action}
                    key={value}
                    handleClick={handleClick}
                />
            ))}
            <button className="toggle-action" onClick={handleActionToggle}>
                {action}
            </button>
        </div>
    );
};

export default Header;
