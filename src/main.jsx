import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter , Routes , Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
  <Routes>
   <Route exact path='/' element = { <App /> } />
    </Routes>
  </React.StrictMode>,
  </BrowserRouter>
)
