import * as types from '../action-types'

interface IState {
    people: any[],
    isFetching: boolean
    error: boolean
}

const initialState: IState = {
    people: [],
    isFetching: false,
    error: false
}

export interface Action {
    type: string,
    payload?: any
}

export const people = (state = initialState, action: Action) => {
    switch (action.type) {
        case types.FETCHING_PEOPLE_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.FETCHING_PEOPLE_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                people: action.payload
            }
        }
        case types.FETCHING_PEOPLE_ERROR: {
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
