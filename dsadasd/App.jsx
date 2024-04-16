import './App.scss'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import Header from './components/Header/Header'
import NavHeader from './components/NavHeader/NavHeader'
import Ratings from './components/Ratings/Ratings'
import StepsForm from './components/StepsForm/StepsForm'
function App() {
  return (
    <div className="App">
      <div className="HeaderBG">
        <Header />
      </div>
      <div className="NavHeaderBG">
        <img className='bg-img' src="/headerbg.png" />
        <div className="NavHeader padding-m">

          <StepsForm />

        </div>
      </div>
      <Ratings />
    </div>
  )
}

export default App
