import React from 'react';
import {NavLink} from "react-router-dom";

import icon from '../../assets/icon.svg'

import {WrapperHeader} from "./style";

export const Header: React.FC = () => (
    <WrapperHeader>
        <NavLink to="/">
            <img src={icon} alt=""/>
        </NavLink>
        <ul>
            <NavLink to="/">
                <li>Home</li>
            </NavLink>
            <NavLink to="/people">
                <li>People</li>
            </NavLink>
            <NavLink to="/search">
                <li>Search</li>
            </NavLink>
        </ul>
    </WrapperHeader>
)
