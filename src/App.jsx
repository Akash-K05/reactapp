import React from 'react'
import Home from './components/Home';


import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Articles from './components/Articles';

const App = () => {
  return (
    <>
    <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
    </>

  )
}

export default App