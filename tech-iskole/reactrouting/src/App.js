import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Item from './pages/Item';
import Company from './pages/Company';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/about">About</Link>
        <br></br>
        <Link to="/contact">Contact</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/company" element={<Company />} />
        <Route path="/product/:productId" element={<Item />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
