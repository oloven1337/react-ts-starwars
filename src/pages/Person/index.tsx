import React from 'react';
import {useHistory} from "react-router-dom";

import {getDataFromPerson} from "../../__data__/actions/person";
import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../../__data__/selectors/person";
import {ButtonStyled} from '../../components/Button'

import {WrapperStyled, WrapperPersonStyled} from "./style";

interface Props {
    match: {
        params: {
            id: number
        }
    }
}

export const Person: React.FC<Props> = (props) => {
    const id = props.match.params.id
    const history = useHistory()
    const dispatch = useDispatch()
    const userData = useSelector(getUserData)

    React.useEffect(() => {
        dispatch(getDataFromPerson(id))
    }, [dispatch, id])

    const handleGoBack = () => {
        history.goBack()
    }

    return (
        <>
            <WrapperPersonStyled>
                <h1>Person - {userData.name}</h1>
                <ButtonStyled onClick={handleGoBack}>Go back</ButtonStyled>
            </WrapperPersonStyled>
            <WrapperStyled>
                <div>
                    <img src='https://starwars-visualguide.com/assets/img/characters/3.jpg' alt=""/>
                 </div>
                <div>
                    <ul>
                        <li>
                            <span>name: </span> {userData.name}
                        </li>
                        <li>
                            <span>height: </span> {userData.height}
                        </li>
                        <li>
                            <span>gender: </span> {userData.gender}
                        </li>
                        <li>
                            <span>mass: </span> {userData.mass}
                        </li>
                        <li>
                            <span>eye_color: </span> {userData.eye_color}
                        </li>
                        <li>
                            <span>birth_year: </span> {userData.birth_year}
                        </li>
                    </ul>
                </div>
            </WrapperStyled>
        </>
    );
};
