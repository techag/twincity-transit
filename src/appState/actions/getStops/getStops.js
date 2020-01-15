import * as stopsActions from './getStopsActions';
import {invokeApiCall} from "../../../apiGetway/ApiGetway";
import {BASE_URL} from "../../../apiGetway/ApiUri";

export const getStopsStart = () => {
    return {
        type: stopsActions.GET_STOPS_START
    }
};

export const getStopsSuccess = stops => {
    return {
        type: stopsActions.GET_STOPS_SUCCESS,
        stops
    }
};

export const getStopsFail = err => {
    return {
        type: stopsActions.GET_STOPS_FAIL,
        err
    }
};

/**
 * Get all stops for given route and direction
 * @param routeId
 * @param directionId
 * @returns {function(*): Promise<AxiosResponse<T> | void>}
 */
export const getStops = (routeId, directionId) => {
    return dispatch => {
        dispatch(getStopsStart());

        return invokeApiCall(`${BASE_URL}/stops/${routeId}/${directionId}`, 'GET', null)
            .then(res => {
                console.log(res)
                dispatch(getStopsSuccess(res))
            })
            .catch(err => dispatch(getStopsFail(err)))
    }
};