import React from "react";
import './DepartureByStop.css'
import Input from "../Input/Input";

const DepartureByStop = (props) => {
    return (
        <div className="departure-by-stop">
            <div className="enter-stop-wrapper">
                <Input
                    inputType="searchInput"
                    name="stop"
                    classes={['stop-input']}
                    placeholder="Enter Stop #Number"
                    clickHandler={props.searchStop}
                    changeHandler={props.onInputChange}
                />
            </div>
        </div>
    )
};

export default DepartureByStop;