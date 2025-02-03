// App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Menu from "./pages/MenuPage";
import SinglePortfolio from "./pages/SinglePortfolio";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MenuPage" element={<Menu />} />
          <Route path="/SinglePortfolio" element={<SinglePortfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
