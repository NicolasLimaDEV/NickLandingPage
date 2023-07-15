import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 18px;
  color: white;
  margin-left: 5rem;

  &::after{
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #16c17c;
    color: red;
  }
  
  @media screen and (max-width: 1024px){
    margin-left: 2rem;
  }

  @media screen and (max-width: 769px){
    font-size: 18px;
    margin-left: 1rem;
  }

`

export const Nav = styled.nav`
  margin-right: 5rem;

  a{
    text-decoration: none;
    padding: 0 20px;
    color: white;
    transition: 200ms;
  }

  a:hover{
    opacity: 0.6;
    transition: 200ms;
  }

  @media screen and (max-width: 1024px){
    margin-right: 2rem;
  }

  @media screen and (max-width: 769px){
    display: none;
  }
`
export const Button = styled.button`
  outline: none;
  font-weight: bold;
  padding: 8px 20px;
  color: #000;
  background-color: white;
  border-radius: 5px;
  transition: 200ms;
  cursor: pointer;

  &:hover{
    background-color: transparent;
    border: 1px solid white;
    color: white;
    transition: 200ms;
  }
`
export const ButtonMobile = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  div{
    width: 25px;
    height: 2.8px;
    margin-top: 4px;
    margin-bottom: 4px;
    background-color: #fff;
    border-radius: 5px;

    &:nth-child(2){
      width: 18px;
    }

    &:nth-child(3){
      width: 10px;
    }
  }

  @media screen and (max-width: 769px){
    display: block;
    margin-right: 1rem;
  }

`
