import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/main.scss'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Logement from './pages/Logement'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/a-propos" element={<About />}></Route>
        <Route path="*" element={<Error />}/>
        <Route path="/Logement/:id" element={<Logement />}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
