import styled from 'styled-components'

export const NewContainer = styled.section`
  background-color: #000;
  width: 100vw;
  height: 25vh;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 769px){
    flex-direction: column;
    height: auto;
    padding: 40px 10px;
  }
`

export const NewOneColumn = styled.div`
  margin-left: 10rem;

  > h3{
    font-size: 35px;
  }

  > p{
    margin-top: 5px;
    opacity: 0.7;
  }

  @media screen and (max-width: 1024px){
    margin-left: 1rem;

    h3{
      font-size: 25px;
    }
  }

  @media screen and (max-width: 769px){
    margin-left: 0;

    > h3{
      font-size: 30px;
      text-align: center;
    }

    > p{
      text-align: center;
    }
  }
`

export const NewTwoColumn = styled.div`
  margin-right: 10rem;

  //Embaixo do input
  > p{
    margin-top: 20px;
    margin-bottom: 6px;
    opacity: 0.7;
  }

  > a{
    color: #16C17C;
  }

  @media screen and (max-width: 1024px){
    margin-right: 1rem;
  }

  @media screen and (max-width: 769px){
    margin-right: 0;
    margin-top: 35px;
    text-align: center;
  }
`

export const DivInput = styled.div`

  > input{
    padding: 12px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 17px;
  }
  
  > button{
    font-size: 17px;
    background-color: #16C17C;
    color: #fff;
    padding: 12px 25px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-weight: bold;
    margin-left: 10px;
    cursor: pointer;
    transition: 200ms;

    &:hover{
      transform: scale(1.03);
      box-shadow: 0px 0px 10px #11e590;
      transition: 200ms;
    }
  }

  @media screen and (max-width: 769px){
    > input{
      width: 100%;
    }

    > button{
      margin-top: 5px;
      width: 100%;
      margin-left: 0;
    }
  }
`