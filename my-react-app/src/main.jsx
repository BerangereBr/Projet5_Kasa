import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/main.scss'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Error from './pages/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/a-propos" element={<About />}></Route>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
