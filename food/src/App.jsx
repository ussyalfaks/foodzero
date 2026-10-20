// App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Menu from "./pages/MenuPage";
import SinglePortfolio from "./pages/SinglePortfolio";
import PortfolioGrid from './pages/PortfolioGrid';
import AboutPage from './pages/AboutPage';
import SinglePost from './pages/SinglePost';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MenuPage" element={<Menu />} />
          <Route path="/SinglePortfolio" element={<SinglePortfolio />} />
          <Route path="/PortfolioGrid" element={<PortfolioGrid />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/SinglePost" element={<SinglePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;