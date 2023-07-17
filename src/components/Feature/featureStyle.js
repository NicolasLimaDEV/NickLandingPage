import styled from 'styled-components'

export const SectionContainer = styled.section`
  background-color: #fff;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (max-width: 769px){
    flex-direction: column;
  }
`

export const OneColumn = styled.div`
  margin-left: 15rem;

  > img{
    width: 600px;
  }

  @media screen and (max-width: 1280px){
    margin-left: 1rem;
  }

  @media screen and (max-width: 1024px){
    margin-left: 1rem;

    > img{
      width: 480px;
    }
  }

  @media screen and (max-width: 769px){
    > img{
      margin-left: -1rem;
      width: 350px;
    }
  }
`

export const TwoColumn = styled.div`
  margin-right: 15rem;

  h3{
    color: #16C17C;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
  }

  h1{
    font-size: 30px;
    color: #000;
    margin-top: 8px;
  }

  p{
    max-width: 750px;
    color: #000;
    opacity: 0.7;
    margin-top: 8px;
  }

  button{
    margin-top: 12px;
    padding: 10px 30px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #16C17C;
    cursor: pointer;

    &:hover{
      transform: scale(1.03);
      box-shadow: 0px 0px 10px #11e590;
      transition: 200ms;
    }
  }

  @media screen and (max-width: 1280px){
    margin-right: 1rem;
    padding: 10px;
  }

  @media screen and (max-width: 1024px){
    margin-right: 1rem;
  }

  @media screen and (max-width: 769px){
    margin-right: 1rem;
    padding: 12px;
    margin-top: 20px;

    > h1{
      font-size: 30px;
    }
  }

  
`
