// App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Menu from "./pages/MenuPage";
import SinglePortfolio from "./pages/SinglePortfolio";
import PortfolioGrid from './pages/PortfolioGrid';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MenuPage" element={<Menu />} />
          <Route path="/SinglePortfolio" element={<SinglePortfolio />} />
          <Route path="/PortfolioGrid" element={<PortfolioGrid />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
