import * as searchStopActions from './searchByStopsAction';
import {invokeApiCall} from "../../../apiGetway/ApiGetway";
import {BASE_URL} from "../../../apiGetway/ApiUri";

export const searchStopStart = () => {
    return {
        type: searchStopActions.SEARCH_STOP_START
    }
};

export const searchStopSuccess = searchedStop => {
    return {
        type: searchStopActions.SEARCH_STOP_SUCCESS,
        searchedStop
    }
};

export const searchStopFail = err => {
    return {
        type: searchStopActions.SEARCH_STOP_FAIL,
        err
    }
};


export const searchStop = stopId => {
    return dispatch => {
        dispatch(searchStopStart());
        return invokeApiCall(`${BASE_URL}/${stopId}`, 'GET', null)
            .then(res => {
                console.log(res)
                dispatch(searchStopSuccess(res))
            })
            .catch(err => dispatch(searchStopFail(err)))
    }
};
