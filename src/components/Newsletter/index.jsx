import {NewContainer, NewOneColumn, NewTwoColumn, DivInput} from './newStyle'

export default function Newsletter(){
  return(
    <NewContainer>
      <NewOneColumn>
        <h3>Want tips & tricks to optimize your flow?</h3>
        <p>Sing up to uor newsletter and stay up to date.</p>
      </NewOneColumn>
      <NewTwoColumn>
        <DivInput>
          <input type="text" placeholder='Enter your email' />
          <button>Notify me</button>
        </DivInput>
        <p>We care bout the protection of your data. Read our</p>
        <a href="#">Privacy Policy.</a>
      </NewTwoColumn>
    </NewContainer>
  )
}