import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 400px;

  img {
    &:hover {
      transform: scale(1.1);
      transition: .2s;
    }
  }

  ul {
    display: flex;
    flex-grow: 2;
    list-style-type: none;
    justify-content: space-between;

    li {
      padding: 4px;
      &:hover {
        transition: .3s;
        border-radius: 3px;
        box-shadow: inset 0 0 20px #7F055F;
      }
    }
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      transform: scale(1.01);
      transition: .3s;
    }
  }
`
