import axios from "axios";
import {Dispatch, Action} from 'redux';

import * as types from '../action-types'

type FetchingPersonRequest = Action<typeof types.FETCHING_PERSON_REQUEST>
type FetchingPersonSuccess = Action<typeof types.FETCHING_PERSON_SUCCESS>
type FetchingPersonError = Action<typeof types.FETCHING_PERSON_ERROR>
type FetchingPerson = FetchingPersonRequest | FetchingPersonSuccess | FetchingPersonError

export const getDataFromPerson = (id: number) => async (dispatch: Dispatch<FetchingPerson>) => {
    try {
        dispatch({
            type: types.FETCHING_PERSON_REQUEST
        })

        const {data} = await axios.get(`https://swapi.dev/api/people/${id}`)

        dispatch({
            type: types.FETCHING_PERSON_SUCCESS,
            payload: data
        })

    } catch (e) {
        dispatch({
            type: types.FETCHING_PERSON_ERROR
        })
    }
}
