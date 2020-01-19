import React from "react";
import './DepartureByStop.css'
import Input from "../Input/Input";

const DepartureByStop = (props) => {
    return (
        <div className="departure-by-stop">
            <div className="enter-stop-wrapper">
                <Input
                    id="search-by-stop"
                    inputType="searchInput"
                    name="stop"
                    classes={['stop-input']}
                    placeholder="Enter Stop #Number"
                    clickHandler={props.searchStop}
                    changeHandler={props.onInputChange}
                />
            </div>
            {props.error &&
            <span className="no-departures">
                    Invalid stop id! Please enter the valid stop id.
                </span>
            }
        </div>
    )
};

export default DepartureByStop;