import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import AppliedJobs from './Components/Applied-Jobs/AppliedJobs';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Jobdetails from './Components/Job Details/Jobdetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Banner></Banner>,
        loader : () => fetch('/fetatures.json'),
      },
      {
        path : 'statistics',
        element : <Statistics></Statistics>
      },
      {
        path : 'appliedJobs',
        element : <AppliedJobs></AppliedJobs>,
        loader : () => fetch('/fetatures.json')
      },
      {
        path : 'blog',
        element : <Blog></Blog>
      },
      {
        path : 'viewdetails/:ids',
        element : <Jobdetails></Jobdetails>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
