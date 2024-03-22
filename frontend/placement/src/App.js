import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PlacementInfo from './components/PlacementInfo/PlacementInfo';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Navbar />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/placementinfo' element={<PlacementInfo />} />
        <Route path='/home' element = {<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;