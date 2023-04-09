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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children : [
      {
        path : '/statistics',
        element : <Statistics></Statistics>
      },
      {
        path : '/appliedjobs',
        element : <AppliedJobs></AppliedJobs>
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
