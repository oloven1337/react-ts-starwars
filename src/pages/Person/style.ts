import styled from 'styled-components'

export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 200px;
  }

  img + div {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    background-color: white;
    margin-top: 10px;
    border-radius: 2px;
    color: #7F055F;
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
