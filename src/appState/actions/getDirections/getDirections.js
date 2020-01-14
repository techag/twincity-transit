import * as directionsAction from './getDirectionsActions';
import {invokeApiCall} from "../../../apiGetway/ApiGetway";
import {BASE_URL} from "../../../apiGetway/ApiUri";

export const getDirectionsStart = () => {
    return {
        type: directionsAction.GET_DIRECTIONS_START
    }
};

export const getDirectionsSuccess = directions => {
    return {
        type: directionsAction.GET_DIRECTIONS_SUCCESS,
        directions
    }
};

export const getDirectionsFail = err => {
    return {
        type: directionsAction.GET_DIRECTIONS_FAIL,
        err
    }
};

/**
 * Get all directions using routeId
 * @param routeId
 * @returns {function(*): Promise<AxiosResponse<T> | void>}
 */

export const getDirections = routeId => {
    return dispatch => {
        dispatch(getDirectionsStart());

        return invokeApiCall(`${BASE_URL}/directions/${routeId}`, 'GET', null)
            .then(res => dispatch(getDirectionsSuccess(res)))
            .catch(err => dispatch(getDirectionsFail(err)))
    }

};