import { useReducer, useCallback } from 'react';
import axios from 'axios';
import AxiosReducer from 'reducers/Axios';
import { requestStart, requestFinished } from 'actions/Axios';

const initialState = {
    isLoading: false,
    isError: false,
};

function useAxios (options = {}) {
    const [ state, dispatch ] = useReducer(AxiosReducer, initialState);

    const fetchData = useCallback(async () => {
        try {
            dispatch(requestStart());
            const response = await axios(options);
            dispatch(requestFinished(response));
        } catch (err) {
            dispatch(requestFinished(err, true));
        }
    }, [ options ]);

    return { response: state, fetchData };
}

export default useAxios;
