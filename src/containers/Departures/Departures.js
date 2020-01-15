import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router'
import './Departures.css';
import DepartureByRoute from "../../components/DeparturesByRoute/DeparturesByRoute";
import DepartureByStop from "../../components/DepartureByStop/DepartureByStop";
import * as action from '../../appState'
import {connect} from "react-redux";
import {createOptions} from "../../apiGetway/utility";

class Departures extends Component {

    //Initial Local State of the component
    state = {
        searchByRoute: true,
        searchByStop: false,
        selectedRoute:'',
        selectedDirection: '',
        selectedStop:'',
        searchInputValue:''
    };

    /**
     * Get all routes on load
     */
    componentDidMount() {
        this.props.getRoutes();
    }

    /**
     * Toggle Route vs Stop
     * @param option
     */
    toggleRouteStop = (option) => {
        if (option === 'byRoute') {
            this.setState(prevState => ({searchByRoute: true, searchByStop: false}));
        } else {
            this.setState(prevState => ({searchByRoute: false, searchByStop: true}));
        }
    };

    /**
     * Route oute change handler function
     * @param e
     */
    onRouteChange = (e) => {
        console.log(e.target.value)
        this.setState({selectedRoute: e.target.value});
        this.props.getDirections(e.target.value);
    };

    /**
     * Direction change handler function
     * @param e
     */
    onDirectionChange = (e) =>{
        this.setState({selectedDirection: e.target.value});
        this.props.getStops(this.state.selectedRoute,e.target.value);
    };

    /**
     * Stop Change handler
     * @param e
     */
    onStopChange = (e) =>{
        this.setState({selectedStop: e.target.value});
        this.props.getDepartures(this.state.selectedRoute,this.state.selectedDirection,e.target.value);
    };

    searchStop = e => {
        console.log(this.state.searchInputValue);
        this.props.searchStop(this.state.searchInputValue);
    };

    onInputChange = e => {
        this.setState({searchInputValue: e.target.value});
    };

    render() {
        return (
            <div className="departures">
                <h1>Real-time Departures</h1>
                <div className="departure-options row">
                    <span className={this.state.searchByRoute ? 'by-route selected-opt' : 'by-route'} onClick={e => {this.toggleRouteStop('byRoute')}}>By Route</span>
                    <span className={this.state.searchByStop ? 'by-stop selected-opt' : 'by-stop'} onClick={e => {this.toggleRouteStop('byStop')}}>By Stop</span>

                </div>
                {this.state.searchByRoute &&
                // Common component to load departure search by route
                    <DepartureByRoute
                        routes={createOptions(this.props.routes, 'RouteId', 'Description')}
                        directions={createOptions(this.props.directions, 'DirectionId', 'DirectionName')}
                        stops={createOptions(this.props.stops, 'PlaceCode', 'Description')}
                        onRouteChange={this.onRouteChange}
                        onDirectionChange={this.onDirectionChange}
                        onStopChange={this.onStopChange}
                    />
                }
                {this.state.searchByStop &&
                //Component to search by stop
                    <DepartureByStop searchStop={this.searchStop} onInputChange={this.onInputChange}/>
                }
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        routes: state.departures.routes,
        directions: state.departures.directions,
        stops: state.departures.stops,
        searchedStop: state.departures.searchedStop
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getRoutes: () => dispatch(action.getRoutes()),
        getDirections: routeId => dispatch(action.getDirections(routeId)),
        getStops: (routeId, directionId) => dispatch(action.getStops(routeId,directionId)),
        getDepartures: (routeId, directionId, stopId) => dispatch(action.getDepartures(routeId,directionId,stopId)),
        searchStop: stopId => dispatch(action.searchStop(stopId))
    }
};


export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(Departures);