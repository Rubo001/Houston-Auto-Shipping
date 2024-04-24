import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import NewPage from './components/NewPage/NewPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <NewPage />
  </React.StrictMode>,
)
