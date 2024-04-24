import Header from '../Header/Header'
import './NewPage.scss'
import Blog2 from '../Blog2/Blog2'
import Footer from '../Footer/Footer'

export default function NewPage() {
  return (
    <div className='NewPage'>
      <div className="HeaderBG">
        <Header />
      </div>
      <Blog2 />
      <Footer />
    </div>
  )
}
