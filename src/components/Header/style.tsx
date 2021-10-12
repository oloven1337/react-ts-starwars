import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

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
    
    li {
      margin-right: 50px;
    }
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      transform: scale(1.05);
      text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);
      transition: .3s;
    }
  }
`
