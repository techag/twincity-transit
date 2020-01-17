import React, { useState, useEffect, useRef } from "react";
import './DepartureStatuses.css'

const DepartureStatuses = props => {
    //Add Auto scroll to view when departures appears on UI
    const departuresRef = useRef(null);
    const scrollToBottom = () => {
        departuresRef.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [props.departures]);

    return (
        <div className="departures-status row" ref={departuresRef}>
            <h1>Departures</h1>
            <p>{props.selectedStopName} - Stop {props.selectedStop}</p>
            {props.departures.length > 0 &&
                <div
                    className={props.departures.length > 5 ? 'departures-list departures-list-scroll' : 'departures-list'}>
                    {props.departures.map((departure, i) => {
                        return (
                            <div className="stop-details row-cols-5" key={i}>
                                <div className="col-3 route-name">{departure.RouteId.toUpperCase()}</div>
                                <div className="col-5 route-description">
                                    {departure.Description}
                                </div>
                                <div className="col-4 current-status">
                                    {departure.DepartureText}
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            {props.departures.length <= 0 &&
                <span className="no-departures">
                    Currently there are not departures available for this route.
                </span>
            }

        </div>
    )
};

export default DepartureStatuses;