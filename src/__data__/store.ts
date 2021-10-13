import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {people} from "./reducers/people";
import {person} from './reducers/person'

const reducers = combineReducers({
    people,
    person
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
