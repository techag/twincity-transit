import * as routeAction from './getRoutesActions';
import {invokeApiCall} from "../../../apiGetway/ApiGetway";
import {BASE_URL} from "../../../apiGetway/ApiUri";

export const getRoutesStart = () => {
    return {
        type: routeAction.GET_ROUTES_START
    }
};

export const getRoutesSuccess = routes => {
    return {
        type: routeAction.GET_ROUTES_SUCCESS,
        routes
    }
};

export const getRoutesFail = err => {
    return {
        type: routeAction.GET_ROUTES_FAIL,
        err
    }
};


/**
 * Get all routes
 * @returns {function(*): Promise<AxiosResponse<T> | void>}
 */
export const getRoutes = () => {
  return dispatch => {
      dispatch(getRoutesStart());
      return invokeApiCall(`${BASE_URL}/routes`, 'GET', null)
          .then(res => dispatch(getRoutesSuccess(res)))
          .catch(err => dispatch(getRoutesFail(err)))
  }
};


export const initialState = () => {
    return dispatch => {
        dispatch(getRoutesStart());
    }
};