import * as types from "../action-types";

export {}

interface UserData {
    name: string,
    height: string,
    gender: string,
    mass: string,
    eye_color: string,
    birth_year: string
}

interface Person {
    isFetching: boolean,
    error: boolean,
    userData: UserData
}

const initialState: Person = {
    isFetching: false,
    error: false,
    userData: {
        name: '',
        height: '',
        gender: '',
        mass: '',
        eye_color: '',
        birth_year: ''
    }
}

export interface Action {
    type: string,
    payload?: UserData
}

export const person = (state = initialState, action: Action) => {
    switch (action.type) {
        case types.FETCHING_PERSON_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.FETCHING_PERSON_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                userData: {...action.payload}
            }
        }
        case types.FETCHING_PERSON_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: true
            }
        }
        default: {
            return state
        }
    }
}
