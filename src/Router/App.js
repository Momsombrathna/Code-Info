import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Learn from '../components/Learn';
import Code from '../components/Code';
import About from '../components/About';
import Profile from '../components/Profile';
import ErrorPage from "../components/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          
          <Route path="/" element={<Learn />} />
          <Route path="/code" element={<Code />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<ErrorPage />} />

        </Routes>
      </Router>


    </>
  );
}

export default App;
