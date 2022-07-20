import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from "./pages/about/About"
import { MainPage } from './pages/mainPage/MainPage';
import 'react-toastify/dist/ReactToastify.css';
import { Favourites } from './pages/favourites/Favourites';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<About />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
