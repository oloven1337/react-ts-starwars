import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getPeople} from "../../__data__/actions/people";
import {getPeopleSelector, isLoadingSelector} from "../../__data__/selectors/people";
import {Loader} from "../../components/Loader";

import {CardStyled, WrapperPeopleCardsStyled} from './style';

export const People: React.FC = () => {
    const [pageNumber, setPageNumber] = React.useState(1)
    const dispatch = useDispatch()
    const people = useSelector(getPeopleSelector)
    const isFetching = useSelector(isLoadingSelector)

    React.useEffect(() => {
        dispatch(getPeople(pageNumber))
    }, [dispatch, pageNumber])

    const handleNextPage = () => {
        setPageNumber(prevState => (
            prevState + 1
        ))
    }

    if (isFetching) {
        return <Loader/>
    }

    return (
        <>
            <h1>People page</h1>
            <button onClick={handleNextPage}>click</button>
            <div style={{margin: '0 auto'}}>
                <WrapperPeopleCardsStyled>
                    {
                        people.map(({name, id}) => (
                            <CardStyled to={`people/${id}`} key={id}>
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                                     alt=""/>
                                <p>{name}</p>
                            </CardStyled>
                        ))
                    }
                </WrapperPeopleCardsStyled>
            </div>
        </>
    );
};
