import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 100px;

  @media screen and (max-width: 1280px){
    padding: 30px 10px;
  }

  @media screen and (max-width: 769px) {
    flex-direction: column;
    padding: 30px 10px;
  }
`;

export const FooterOneColumn = styled.div`
  margin-left: 15rem;

  > h1 {
    color: #16c17c;
  }

  > p {
    margin: 10px 0px;
    width: 450px;
    opacity: 0.7;
  }
  
  @media screen and (max-width: 1280px){
    margin-left: 3rem;
  }
  
  @media screen and (max-width: 1024px){
    margin-left: 2rem;
  }

  @media screen and (max-width: 769px) {
    margin-left: 0.5rem;

    > p {
      width: 100%;
    }
  }
`;

export const FooterTwoColumn = styled.div`
  margin-right: 15rem;

  > p {
    opacity: 0.5;
    margin-bottom: 10px;
  }

  > ul li {
    list-style: none;
    padding: 5px 0px;

    &:hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1280px){
    margin-right: 3rem;
  }

  @media screen and (max-width: 1024px){
    margin-right: 2rem;
  }

  @media screen and (max-width: 769px) {
    margin-right: auto;
    margin-left: 0.5rem;
    margin-top: 20px;
  }
`;

export const SocialIcons = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  .icon {
    padding-right: 10px;
    opacity: 0.6;
    transition: 200ms;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      transition: 200ms;
    }
  }
`;
