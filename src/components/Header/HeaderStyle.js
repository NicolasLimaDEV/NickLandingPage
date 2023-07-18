import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: linear-gradient(to top, #101010, #232323);
  z-index: 1000;
`;

export const Logo = styled.h1`
  font-size: 18px;
  color: white;
  margin-left: 5rem;

  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #16c17c;
    color: red;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 2rem;
  }

  @media screen and (max-width: 769px) {
    font-size: 18px;
    margin-left: 1rem;
  }
`;

export const Nav = styled.nav`
  margin-right: 5rem;

  a {
    text-decoration: none;
    padding: 0 20px;
    color: white;
    transition: 200ms;
  }

  a:hover {
    opacity: 0.6;
    transition: 200ms;
  }

  @media screen and (max-width: 1024px) {
    margin-right: 2rem;
  }

  @media screen and (max-width: 769px) {
    display: ${({ open }) => (open ? "none" : "block")};
    width: 250px;
    padding: 0px 20px;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: 0;
    
    background: linear-gradient(to bottom, #101010, #232323);
    z-index: 1000;

    > a {
      display: block;
      padding: 20px 5px;
    }
  }
`;
export const Button = styled.button`
  outline: none;
  font-weight: bold;
  padding: 8px 20px;
  color: #000;
  background-color: white;
  border-radius: 5px;
  transition: 200ms;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    transition: 200ms;
  }
`;
export const ButtonMobile = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 769px) {
    display: block;
    margin-right: 1rem;
  }
`;
