import axios from 'axios'

import * as types from '../action-types'

interface Results {
    data: {
        count: number
        next: string
        previous: any
        results: any
    }
}

export const getPeoples = () => async (dispatch: Function) => {
    try {
        dispatch({
            type: types.FETCHING_PEOPLES_REQUEST
        })

        const {data}: Results = await axios.get('https://swapi.dev/api/people')

        console.log(data)

        dispatch({
            type: types.FETCHING_PEOPLES_SUCCESS,
            payload: data.results
        })

    } catch (e) {
        dispatch({
            type: types.FETCHING_PEOPLES_ERROR,
        })
    }
}
