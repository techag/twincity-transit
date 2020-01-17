import React, {Component} from "react";
import './DeparturesByRoute.css';
import Input from "../Input/Input";

const DepartureByRoute = (props) => {
    return(
        <div className="departure-by-route row">
            <div className="select-box-wrapper select-box-visible">
                <Input
                    inputType="dropdown"
                    name="route"
                    defaultOption="Select Route"
                    classes={['select-route']}
                    options={props.routes}
                    changeHandler={props.onRouteChange}
                />
            </div>
            <div className={props.directions.length > 0 ? 'select-box-wrapper select-box-visible' : 'select-box-wrapper'}>
                <Input
                    inputType="dropdown"
                    name="direction"
                    defaultOption="Select Direction"
                    classes={['select-stop']}
                    options={props.directions}
                    changeHandler={props.onDirectionChange}
                />
            </div>
            <div className={props.stops.length > 0  ? 'select-box-wrapper select-box-visible' : 'select-box-wrapper'}>
                <Input
                    inputType="dropdown"
                    name="stop"
                    defaultOption="Select Stop"
                    classes={['select-stop']}
                    options={props.stops}
                    changeHandler={props.onStopChange}
                />
            </div>
        </div>
    )
};

export default DepartureByRoute;