import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element = {<Navbar />}/> */}
        <Route path='/login' element = {<Login />}/>
        <Route path='/register' element = {<Register />}/>
        <Route path='/home' element = {<Home />}/>
        <Route path='/' element = {<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;