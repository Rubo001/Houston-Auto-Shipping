import './App.scss'
import Header from './components/Header/Header'
import NavHeader from './components/NavHeader/NavHeader'
import Ratings from './components/Ratings/Ratings'
import StepsForm from './components/StepsForm/StepsForm'
function App() {
  return (
    <div className="App">
      <div className="HeaderBG container">
        <Header />
      </div>
      <div className="NavHeaderBG">
        <img className='bg-img' src="/headerbg.png" />
        <div className="NavHeader container">

          <StepsForm />

        </div>
        <Ratings />
      </div>
    </div>
  )
}

export default App
