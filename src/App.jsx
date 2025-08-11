import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import ContactForm from "./pages/Contact/ContactForm";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Work from "./pages/Work/Work";
import Blog from "./pages/Blog/Blog";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
