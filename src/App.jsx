import './App.scss'
import AboutUs from './components/AboutUS/AboutUs'
import Blog1 from './components/Blog1/Blog1'
import Header from './components/Header/Header'
import NavHeader from './components/NavHeader/NavHeader'
import Ratings from './components/Ratings/Ratings'
import Services from './components/Services/Services'
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
      <AboutUs />
      <Services />
      <Blog1 />
    </div>
  )
}

export default App
