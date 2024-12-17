import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import $cannabis from './assets/cannabis-background.jpg';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
          <Header />
          <Main />
          <Footer />
      </div>
      
    </>
  )
}

export default App
