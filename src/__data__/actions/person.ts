import axios from "axios";

import * as types from '../action-types'

interface UserData {
    name: string,
    height: string,
    gender: string,
    mass: string,
    eye_color: string,
    birth_year: string
}

export const getDataFromPerson = (id: number) => async (dispatch: Function) => {
    try {
        dispatch({
            type: types.FETCHING_PERSON_REQUEST
        })

        // const {data} = await axios.get(`https://swapi.dev/api/people/${id}`)

        // const newData =

        // console.log(newData)
        // const newData = {}
        // const newData = {}

        //     name: '',
        //     height: '',
        //     gender: '',
        //     mass: '',
        //     eye_color: '',
        //     birth_year: ''

        const data = {
            birth_year: "33BBY",
            created: "2014-12-10T15:11:50.376000Z",
            edited: "2014-12-20T21:17:50.311000Z",
            eye_color: "red",
            gender: "n/a",
            hair_color: "n/a",
            height: "96",
            mass: "32",
            name: "R2-D2"
        }

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
