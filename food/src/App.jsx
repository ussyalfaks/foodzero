// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Menu from './pages/MenuPage'
import PortfolioGrid from './pages/PortfolioGrid';
import ColumnPage from './pages/ColumnPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MenuPage" element={<Menu />} />
          <Route path="/PortfolioGrid" element={<PortfolioGrid />} />
          <Route path="/ColumnPage" element={<ColumnPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App




