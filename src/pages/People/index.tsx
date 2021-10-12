import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import img from '../../assets/img.png'
import {CardStyled, WrapperPeopleCardsStyled} from './style';
import {getPeoples} from "../../__data__/actions/peoples";
import {getPeoplesSelector, isLoadingSelector} from "../../__data__/selectors/peoples";
import {Loader} from "../../components/Loader";

export const People = () => {
    const dispatch = useDispatch()
    const peoples = useSelector(getPeoplesSelector)
    const isFetching = useSelector(isLoadingSelector)

    React.useEffect(() => {
        dispatch(getPeoples())
    }, [])

    console.log('render')
    // console.log(peoples)

    const arr = [
        {
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
        },
        {
            name: "Luke Skywalker2",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
        },
        {
            name: "Luke Skywalker3",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
        },
        {
            name: "Luke Skywalker4",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
        }]

    if (isFetching) {
        return <Loader/>
    }

    return (
        <>
            <h1>People page</h1>
            <div style={{margin: '0 auto'}}>
                <WrapperPeopleCardsStyled>
                    {
                        //@ts-ignore
                        peoples.map(({name}, i) => (
                            <CardStyled to={`people/${i + 1}`} key={i}>
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${i + 1}.jpg`}
                                     alt=""/>
                                {/*<img src={img}*/}
                                {/*     alt=""/>*/}
                                <p>{name}</p>
                            </CardStyled>
                        ))
                    }
                </WrapperPeopleCardsStyled>
            </div>
        </>
    );
};
