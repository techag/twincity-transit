import axios from 'axios';

const timeout = '30000';
export const invokeApiCall = (uri, method, payload) => {
    return axios.request({url: uri, data: payload, method})
        .catch(err => {
            console.log(err)
        })
};

