import {useEffect, useReducer} from "react";
import {firebaseLooper} from "../utilities/funcions";
import {IuseFetchFirebase} from "../types";

const dataFetchReducer = function (state: any, action: any) {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            throw new Error();
    }
};

export function useFetchFirebase(firebaseAction?: any):IuseFetchFirebase {
    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: [],
    });
    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            dispatch({type: 'FETCH_INIT'});
            try {
                let result: any = await firebaseAction.once('value');
                result = firebaseLooper(result.val());
                if (!didCancel) {
                    dispatch({type: 'FETCH_SUCCESS', payload: result});
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({type: 'FETCH_FAILURE'});
                }
            }
        };
        fetchData();
        return () => {
            didCancel = true;
        };
    }, [dispatch]);

    return state;
}