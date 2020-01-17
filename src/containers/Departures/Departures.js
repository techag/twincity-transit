import React, {Component} from 'react';
import './Departures.css';
import DepartureByRoute from "../../components/DeparturesByRoute/DeparturesByRoute";
import DepartureByStop from "../../components/DepartureByStop/DepartureByStop";
import * as action from '../../appState'
import {connect} from "react-redux";
import {createOptions} from "../../apiGetway/utility";
import DepartureStatuses from "../../components/DepartureStatuses/DepartureStatuses";
import Map from "../../components/Map/Map";

class Departures extends Component {

    //Initial Local State of the component
    state = {
        searchByRoute: true,
        searchByStop: false,
        selectedRoute:'',
        selectedDirection: '',
        selectedStop:'',
        selectedStopName:'',
        searchInputValue:'',
        showDepartures: true,
        autoLoadInterval: null,
        isMarkdown: true,
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
        this.props.initialState(); // On tab change, reset the state to initial state
        this.disableDeparturesAutoLoad(); // Also disable the departures auto load

        if (option === 'byRoute') {
            this.props.getRoutes(); // Fetch fresh routes again on tab select
            this.setState(prevState => ({searchByRoute: true, searchByStop: false, showDepartures: true}));
        } else {
            this.setState(prevState => ({searchByRoute: false, searchByStop: true, showDepartures: false}));
        }
    };

    /**
     * Route oute change handler function
     * @param e
     */
    onRouteChange = (e) => {
        this.setState({selectedRoute: e.target.value}, () => {
            this.props.getDirections(this.state.selectedRoute)
        });
    };

    /**
     * Direction change handler function
     * @param e
     */
    onDirectionChange = (e) =>{
        this.setState({selectedDirection: e.target.value}, () => {
            this.props.getStops(this.state.selectedRoute,this.state.selectedDirection);
            if(this.state.selectedStop) {
                this.disableDeparturesAutoLoad();
            }
        });

    };

    /**
     * Stop Change handler
     * @param e
     */
    onStopChange = (e) =>{
        this.setState({selectedStop: e.target.value, selectedStopName: e.target.options[e.target.selectedIndex].innerHTML}, () => {
            this.props.getDepartures(this.state.selectedRoute,this.state.selectedDirection,this.state.selectedStop);
            this.enableDeparturesAutoLoad();
        });
    };

    /**
     * Auto load the current departure status for given stop
     */
    enableDeparturesAutoLoad = () => {
        if (this.state.selectedRoute && this.state.selectedDirection && this.state.selectedStop) {
            const setTimer = window.setInterval(() => {
                this.props.getDepartures(this.state.selectedRoute,this.state.selectedDirection, this.state.selectedStop);
            }, 5000);
            this.setState({ autoLoadInterval: setTimer, scrollToBottom: false })
        }

    };

    /**
     * Disable the departures auto load
     */
   disableDeparturesAutoLoad = () => {
       console.log("Auto load finished");
        const clearTimer = window.clearInterval(this.state.autoLoadInterval);
        this.setState({ autoLoadInterval: clearTimer })
    };

    /**
     * Search Stops by stop number
     * @param e
     */
    searchStop = e => {
        this.props.searchStop(this.state.searchInputValue);
        this.setState({showDepartures: true, selectedStop: e.target.value})
    };

    /**
     * Set the search input value to state
     * @param e
     */
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
                    <DepartureByStop searchStop={this.searchStop} onInputChange={this.onInputChange} error={this.props.error}/>
                }

                {this.props.stopDepartures && this.state.showDepartures  &&
                    <>
                        <DepartureStatuses
                            departures={this.props.stopDepartures}
                            selectedStop={this.state.selectedStop}
                            selectedStopName={this.state.selectedStopName}
                        />
                        {/*<Map*/}
                        {/*    isMarkdown*/}
                        {/*    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhOvaHlI9NiyOjd6V77SFq9etw1ImheF8"*/}
                        {/*    loadingElement={<div className="google-map-wrapper" />}*/}
                        {/*    containerElement={<div className="google-map-container"/>}*/}
                        {/*    mapElement={<div className="google-map-element" />}*/}
                        {/*    lat={this.props.selectedStopDetails.Latitude}*/}
                        {/*    lng={this.props.selectedStopDetails.Longitude}*/}
                        {/*/>*/}
                    </>
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
        searchedStop: state.departures.searchedStop,
        stopDepartures: state.departures.stopDepartures,
        selectedStopDetails: state.departures.selectedStopDetails,
        error: state.departures.err
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getRoutes: () => dispatch(action.getRoutes()),
        getDirections: routeId => dispatch(action.getDirections(routeId)),
        getStops: (routeId, directionId) => dispatch(action.getStops(routeId,directionId)),
        getDepartures: (routeId, directionId, stopId) => dispatch(action.getDepartures(routeId,directionId,stopId)),
        searchStop: stopId => dispatch(action.searchStop(stopId)),
        initialState: () => dispatch(action.initialState())
    }
};


export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(Departures);