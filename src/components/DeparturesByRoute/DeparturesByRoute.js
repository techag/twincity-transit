import React, {Component} from "react";
import './DeparturesByRoute.css';
import Input from "../Input/Input";

const DepartureByRoute = (props) => {
    return(
        <div className="departure-by-route row">
            <div className="select-box-wrapper select-box-visible">
                <Input
                    id="select-route"
                    inputType="dropdown"
                    name="route"
                    defaultOption="Select Route"
                    classes={['select-route']}
                    options={props.routes}
                    changeHandler={props.onRouteChange}
                    selected={props.selectedRoute}
                />
            </div>
            <div className={props.directions.length > 0 ? 'select-box-wrapper select-box-visible' : 'select-box-wrapper'}>
                <Input
                    id="select-direction"
                    inputType="dropdown"
                    name="direction"
                    defaultOption="Select Direction"
                    classes={['select-stop']}
                    options={props.directions}
                    changeHandler={props.onDirectionChange}
                    selected={props.selectedDirection}
                />
            </div>
            <div className={props.stops.length > 0  ? 'select-box-wrapper select-box-visible' : 'select-box-wrapper'}>
                <Input
                    id="select-stop"
                    inputType="dropdown"
                    name="stop"
                    defaultOption="Select Stop"
                    classes={['select-stop']}
                    options={props.stops}
                    changeHandler={props.onStopChange}
                    selected={props.selectedStop}
                />
            </div>
        </div>
    )
};

export default DepartureByRoute;