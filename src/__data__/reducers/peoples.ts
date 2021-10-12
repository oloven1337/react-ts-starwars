import * as types from '../action-types'

interface IState {
    peoples: any[],
    isFetching: boolean
    error: boolean
}

const initialState: IState = {
    peoples: [],
    isFetching: false,
    error: false
}

export interface Action {
    type: string,
    payload?: any
}

export const peoples = (state = initialState, action: Action) => {
    switch (action.type) {
        case types.FETCHING_PEOPLES_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.FETCHING_PEOPLES_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                peoples: action.payload
            }
        }
        case types.FETCHING_PEOPLES_ERROR: {
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
