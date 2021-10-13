import React from 'react';
import {Route, Switch} from "react-router-dom";

import {Header} from './components/Header'
import {Main} from "./pages/Main";
import {People} from './pages/People'
import {Person} from "./pages/Person";
import {Search} from './pages/Search'

import './App.css';

export const App = () => {
    return (
        <>
            <Header/>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/people" exact component={People}/>
                <Route path="/people/:id" exact component={Person}/>
                <Route path="/search" exact component={Search}/>
            </Switch>
        </>
    )
}
