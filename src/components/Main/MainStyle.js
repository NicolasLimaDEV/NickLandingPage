import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  > h1{
    font-size: 80px;
  }

  > p{
    opacity: 0.7;
    font-size: 17px;
  }

  > button{
    margin-top: 20px;
    outline: none;
    border: none;
    padding: 12px 30px;
    font-weight: bold;
    background-color: #16c17c;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: 200ms;

    &:hover{
      transform: scale(1.03);
      box-shadow: 0px 0px 10px #11e590;
      transition: 200ms;
    }
  }

  @media screen and (max-width: 769px){
    padding: 10px;
    height: 50vh;

    > h1{
      font-size: 40px;
      text-align: center;
    }

    > p{
      text-align: center;
    }

    > button{
      font-size: 18px;
    }
  }

`