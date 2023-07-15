import {FooterContainer, FooterOneColumn, FooterTwoColumn, SocialIcons} from './footerStyle'

//Icons - React Icons
import {AiFillFacebook, AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'
import {FaGithubSquare} from 'react-icons/fa'

export default function Footer(){
  return(
    <FooterContainer>
      <FooterOneColumn>
        <h1>NICK.</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus sequi expedita, voluptatibus sit facilis nisi aliquid suscipit libero.</p>
        <SocialIcons>
          <AiFillFacebook size={45}  className='icon'/>
          <AiOutlineInstagram size={45} className='icon'/>
          <AiFillLinkedin size={45} className='icon'/>
          <FaGithubSquare size={40} className='icon'/>
        </SocialIcons>
      </FooterOneColumn>

      <FooterTwoColumn>
        <p>Company</p>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Partners</li>
        </ul>
      </FooterTwoColumn>
    </FooterContainer>
  )
}