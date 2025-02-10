// App.jsx
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Menu from './pages/MenuPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MenuPage" element={<Menu />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App




