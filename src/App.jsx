import GlobalStyle from './GlobalStyles.js'
import Feature from './components/Feature/index.jsx'
import Footer from './components/Footer/index.jsx'
import Header from './components/Header/index.jsx'
import Main from './components/Main/index.jsx'
import Newsletter from './components/Newsletter/index.jsx'
import Plans from './components/Plans/index.jsx'

export default function App(){
  return(
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <Feature />
      <Newsletter />
      <Plans />
      <Footer />
    </div>
  )
}