import Navbar from "./components/navbar/Navbar";
import Home from "/src/pages/home/Home";
import Services from "./pages/services/Services";
import Careers from "./pages/careers/Careers";
import Reviews from "./pages/reviews/Reviews";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Blogs from "./pages/blogs/Blogs";
import Register from "./components/register/Register";

const App = () => {
  return (
    <Router>
      <div className="container">
        {/* Navbar is always visible */}
        <div className="navbar">
          <Navbar />
          
        </div>
        {/* Dynamic content area */}
        <div className="main-content">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/careers" element={<Careers/>} />
            <Route path="/reviews" element={<Reviews/>} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
          
        </div>
        

        {/* Footer is always visible */}
      
      <Footer/>
    
      </div>
      
    </Router>
  );
};

export default App;