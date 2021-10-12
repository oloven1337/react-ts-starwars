import React from 'react';

import {LoaderStyled} from './style'

import loader from '../../assets/loader.svg'

export const Loader = () => (
    <LoaderStyled>
        <img src={loader} alt="Loading..."/>
    </LoaderStyled>
)
