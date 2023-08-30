// import axios from 'axios'

import { Route, Routes, useLocation } from "react-router-dom";  //useNavigate puede ser necesario

import LandingPage from './Pages/LandingPage/Landing';
import Detail from './Pages/DetailPage/Detail';
import Home from './Pages/HomePage/Home'
import ErrorPage from './Pages/ErrorPage/Error';
import About from './Pages/AboutPage/About'; 
import FormPage from './Pages/FormPage/FormPage';
import HomeButton from "./Components/HomeButton/HomeButton";


import './App.css';


function App() {

const location = useLocation();


  return (
    <div className="App">

      {(location.pathname !== '/home' && location.pathname !== '/') ? <HomeButton/> : null }

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
