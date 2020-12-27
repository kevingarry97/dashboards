import axios from 'axios';
import * as actions from '../api';

const api = ({ dispatch }) => next => async (action) => {
    if(action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onSuccess, onError, onStart } = action.payload;

    next(action);

    if(onStart) dispatch({onStart});
    
    try {
        const response = await axios.request({
            baseURL: 'http://frozen-harbor-29274.herokuapp.com/api',
            url,
            method,
            data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        dispatch(actions.apiCallSuccess(response.data));
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data })
    } catch(err) {
        dispatch(actions.apiCallFailed(err.message));
        if(onError) dispatch({ type: onError, payload: err.message});
    }
}

export default api;