import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;

  h1 {
    color: white;
  }
`

export const WrapperPeopleCardsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`
export const CardStyled = styled(Link)`
  background-color: white;
  margin: 5px 10px;
  text-decoration: none;

  img {
    width: 200px;
  }

  p {
    color: black;
  }
`
