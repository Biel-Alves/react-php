import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
