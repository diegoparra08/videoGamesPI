// import axios from 'axios'
// import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";  //useNavigate puede ser necesario
// import { Provider } from 'react-redux';
import store from './Redux/store';

import LandingPage from './Pages/LandingPage/Landing';
import Detail from './Pages/DetailPage/Detail';
import Home from './Pages/HomePage/Home'
import ErrorPage from './Pages/ErrorPage/Error';
import About from './Pages/AboutPage/About'; 
import FormPage from './Pages/FormPage/FormPage';
import NavBar from './Components/NavBar/NavBar'


import './App.css';


function App() {

  const location = useLocation(); //Sirve para saber donde se renderiza la NavBar 
  

  return (
    <div className="App">
      <h1>Henry Videogames!!!!</h1>

      {location.pathname !== '/' && <NavBar/>}

      <Routes>
        <Route path='/' element={< LandingPage />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/home' element={<Home />} />
        <Route path='/create' element={<FormPage />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
