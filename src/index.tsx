import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createGlobalStyle} from "styled-components";

import {App} from './App';
import {store} from "./__data__/store";

import './index.css';

import spc from './assets/spc.png'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div style={{position: "fixed", zIndex: -2, minWidth: '100%', minHeight: '100%', padding: 0, margin: 0}}>
                <img src={spc} alt=""/>
            </div>
            <GlobalStyle/>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

