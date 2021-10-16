import styled from 'styled-components'

export const WrapperPersonStyled = styled.div`
  h1 {
    color: white;
  }
`

export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 200px;
  }

  ul {
    background-color: white;
    padding: 10px 50px;
    border-radius: 5px;

    li {
      list-style-type: none;
      padding: 0;
      margin: 0;
      font-size: 18px;

      span {
        color: #7F055F;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
`
