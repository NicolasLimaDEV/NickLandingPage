import {HeaderContainer, Logo, Nav, Button, ButtonMobile} from './HeaderStyle'

export default function Header(){
  return(
    <HeaderContainer>
      <Logo>
        <h1>NICK.</h1>
      </Logo>
      <ButtonMobile>
        <div></div>
        <div></div>
        <div></div>
      </ButtonMobile>
      <Nav>
        <a href="#">Home</a>
        <a href="#">About me</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <Button>Get Start</Button>
      </Nav>
    </HeaderContainer>
  )
}