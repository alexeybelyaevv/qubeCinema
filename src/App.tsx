import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/mainPage/MainPage';
import 'react-toastify/dist/ReactToastify.css';
import { Favourites } from './pages/favourites/Favourites';
import { ToastContainer } from 'react-toastify';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
