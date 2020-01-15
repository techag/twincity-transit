/**
 * Common redux store for STOPS, DIRECTIONS, STOPS and DEPARTURES
 */

import * as allActions from '../actions/allActions';
import {updateState} from "../../apiGetway/utility";

const initialState = {
    routes:null,
    directions: null,
    stops: null,
    departures:null,
    searchedStop:null,
    err: null,
    loading: false
};

export const departures = (state = initialState, action) => {
    switch (action.type) {
        //Routes State
        case allActions.GET_ROUTES_START:
            return updateState(state, {...initialState, loading: true});
        case allActions.GET_ROUTES_SUCCESS:
            return updateState(state, {loading:false, routes: action.routes.data, directions:null, stops:null});
        case allActions.GET_ROUTES_FAIL:
            return updateState(state, {loading: false, err: action.err});

        //Directions State
        case allActions.GET_DIRECTIONS_START:
            return updateState(state, {...state, loading: true});
        case allActions.GET_DIRECTIONS_SUCCESS:
            return updateState(state, {loading:false, directions: action.directions.data, stops: null});
        case allActions.GET_DIRECTIONS_FAIL:
            return updateState(state, {loading: false, err: action.err});

         //Stops Actions
        case allActions.GET_STOPS_START:
            return updateState(state, {...state, loading: true});
        case allActions.GET_STOPS_SUCCESS:
            return updateState(state, {loading:false, stops: action.stops.data, departures: null});
        case allActions.GET_STOPS_FAIL:
            return updateState(state, {loading: false, err: action.err});

        //Departures Actions
        case allActions.GET_DEPARTURES_START:
            return updateState(state, {...state, loading: true});
        case allActions.GET_DEPARTURES_SUCCESS:
            return updateState(state, {loading:false, departures: action.departures.data.Departures});
        case allActions.GET_DEPARTURES_FAIL:
            return updateState(state, {loading: false, err: action.err});

        //Search stop Actions
        case allActions.SEARCH_STOP_START:
            return updateState(state, {...state, loading: true});
        case allActions.SEARCH_STOP_SUCCESS:
            return updateState(state, {loading:false, searchedStop: action.searchedStop.data, stops: null, directions:null, departures:null});
        case allActions.SEARCH_STOP_FAIL:
            return updateState(state, {loading: false, err: action.err});

        default:
            return state;
    }
};