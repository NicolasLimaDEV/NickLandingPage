import styled from 'styled-components'

export const PlansContainer = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 10px;
  background-color: #fff;

  @media screen and (max-width: 769px){
    flex-direction: column;
    padding: 30px 10px;
  }

`

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 400px;
  margin: 0 20px;
  padding: 20px;
  border-radius: 5px;
  background-color: #fafafa;
  box-shadow: 0px 0px 10px #aaa;
  transition: 540ms;

  @media screen and (max-width: 1024px){
    padding: 10px;
  }

  &:hover{
    transition: 200ms;
    transform: scale(1.06);
    background-color: #eee;
  }

  @media screen and (max-width: 769px){
    margin: 10px 0px;
    box-shadow: 0px 0px 15px #aaa;

    &:hover{
      transform: scale(1);
      background-color: transparent;
      box-shadow: 0px 0px 15px #aaa;
    }
  }

  > img{
    margin-top: -20px;

    @media screen and (max-width: 1024px){
      width: 70px;
    }
  }

  > h3{
    margin-top: 20px;
    font-size: 20px;
    color: #000;
  }

  > p {
    font-size: 35px;
    font-weight: bold;
    color: #000;
    padding: 20px 0px;
  }

  >ul li{
    list-style: none;
    color: #000;
    padding: 10px;
    font-weight: bold;
  }

  > button{
    padding: 12px 35px;
    background-color: #16C17C;
    font-weight: bold;
    border: none;
    margin-top: 12px;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
      transform: scale(1.03);
      color: #16C17C;
      background-color: #000;
      box-shadow: 0px 0px 10px #11e590;
      transition: 200ms;
    }
  }
`