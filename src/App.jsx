import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import $cannabis from './assets/cannabis-background.jpg';
import $headshot from './assets/writer-headshot.jpg';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Media from './pages/Media';




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="container">
          <Header />
          <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </main>
          <Footer />
      </div>
    </Router>
  )
}

export default App
