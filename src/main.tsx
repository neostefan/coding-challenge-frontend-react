import React from 'react'
import ReactDOM from 'react-dom/client'
import QRCode from 'react-qr-code';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Movies from './moviesListing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <QRCode value='http://20.108.66.200:4040/movies'/>,
    errorElement: <div>something went wrong!</div>
  },
  {
    path: "/movies",
    element: <Movies/>,
    errorElement: <div>something went wrong!</div>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
