import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {peoples} from "./reducers/peoples";

const reducers = combineReducers({
    peoples
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
