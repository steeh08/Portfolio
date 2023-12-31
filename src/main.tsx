import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Header from './componentes/header/Header'
import Portfolio from './componentes/portfolio/Portfolio'
import Footer from './componentes/footer/Footer'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
     <Header/>
     <Portfolio/> 
     <Footer/>
     </>,
  },
  {
    path: "/notícias",
    element: <div>Página de notícias</div>,
  },
  {
    path: "/sobre",
    element: <div>Página de sobre</div>,
  },
  {
    
    path: "/contato",
    element:  <div>Página de contato</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)