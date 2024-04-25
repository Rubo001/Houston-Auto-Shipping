import Header from '../../components/Header/Header'
import './NewPage.scss'
import Blog2 from '../../components/Blog2/Blog2'
import Footer from '../../components/Footer/Footer'

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
