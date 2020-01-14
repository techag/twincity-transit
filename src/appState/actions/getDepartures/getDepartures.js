import * as departuresActions from './getDeparturesActions';
import {invokeApiCall} from "../../../apiGetway/ApiGetway";
import {BASE_URL} from "../../../apiGetway/ApiUri";

export const getDeparturesStart = () => {
    return {
        type: departuresActions.GET_DEPARTURES_START
    }
};

export const getDeparturesSuccess = departures => {
    return {
        type: departuresActions.GET_DEPARTURES_SUCCESS,
        departures
    }
};

export const getDeparturesFail = err => {
    return {
        type: departuresActions.GET_DEPARTURES_FAIL,
        err
    }
};

/**
 * Get all departures of given route, direction and stop
 * @param routeId
 * @param directionId
 * @param stopId
 * @returns {function(*): Promise<AxiosResponse<T> | void>}
 */
export const getDepartures = (routeId, directionId, stopId) => {
   return dispatch => {
       dispatch(getDeparturesStart())

       return invokeApiCall(`${BASE_URL}/${routeId}/${directionId}/${stopId}`, 'GET', null)
           .then(res => dispatch(getDeparturesSuccess(res)))
           .catch(err => {dispatch(getDeparturesFail(err))})
   }
};