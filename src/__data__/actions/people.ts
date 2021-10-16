import axios from 'axios'
import {Dispatch, Action} from 'redux';

import * as types from '../action-types'

type Person = {
    id: number
    name: string,
    birth_year: string,
    gender: string,
    height: string,
}

interface Results {
    data: {
        count: number
        next: string
        previous: null | number
        results: Person[]
    }
}

type FetchingPeopleRequest = Action<typeof types.FETCHING_PEOPLE_REQUEST>
type FetchingPeopleSuccess = Action<typeof types.FETCHING_PEOPLE_SUCCESS>
type FetchingPeopleError = Action<typeof types.FETCHING_PEOPLE_ERROR>
type FetchingPeople = FetchingPeopleRequest | FetchingPeopleSuccess | FetchingPeopleError

export const getPeople = (id: number) => async (dispatch: Dispatch<FetchingPeople>) => {
    try {
        dispatch({
            type: types.FETCHING_PEOPLE_REQUEST
        })

        const {data}: Results = await axios.get(`https://swapi.dev/api/people/?page=${id}`)

        data.results.map((item, i) => {
            item.id = i + 1
            return item
        })

        dispatch({
            type: types.FETCHING_PEOPLE_SUCCESS,
            payload: data.results
        })

    } catch (e) {
        dispatch({
            type: types.FETCHING_PEOPLE_ERROR,
        })
    }
}
