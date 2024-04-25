import ROUTES from '../../routes'
import './ErrorPage.scss'
import { Link } from 'react-router-dom'


export default function ErrorPage() {
  return (
    <div className='ErrorPage'>
      <h1>ERROR 404</h1>
      <h2>Page Not Found</h2>
      <Link to={ROUTES.HOME}>Back To Home</Link>
    </div>
  )
}
