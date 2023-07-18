import { useState } from 'react'
import {HeaderContainer, Logo, Nav, Button, ButtonMobile} from './HeaderStyle'
import { FaBars } from 'react-icons/fa'

export default function Header(){

  const [open, setOpen] = useState(false)

  function openMenu(){
    setOpen(!open)
  }

  return(
    <HeaderContainer>
      <Logo>
        <h1>NICK.</h1>
      </Logo>
      <ButtonMobile onClick={openMenu}>
        <FaBars size={30} style={{color: '#fff'}} />
      </ButtonMobile>
      <Nav open={open}>
        <a href="#">Home</a>
        <a href="#">About me</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <Button>Get Start</Button>
      </Nav>
    </HeaderContainer>
  )
}