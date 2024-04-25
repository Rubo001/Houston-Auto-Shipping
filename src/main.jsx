import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss'
import NewPage from './pages/NewPage/NewPage'
import ROUTES from './routes';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import News from './pages/News/News';
import FAQ from './pages/FAQ/FAQ';
import Posts from './components/Posts';
import Contact from './pages/Contact/Contact';


const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: ROUTES.BLOG,
    element: <NewPage />,
    errorElement: <ErrorPage />
  },
  {
    path: ROUTES.NEWS,
    element: <News />,
    errorElement: <ErrorPage />
  },
  {
    path: ROUTES.POSTS,
    element: <Posts />,
    errorElement: <ErrorPage />
  },
  {
    path: ROUTES.FAQ,
    element: <FAQ />,
    errorElement: <ErrorPage />
  },
  {
    path: ROUTES.CONTACT,
    element: <Contact />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
