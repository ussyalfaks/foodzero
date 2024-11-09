// App.jsx
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Menu from './pages/MenuPage'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MenuPage" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App




