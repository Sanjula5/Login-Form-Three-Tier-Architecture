import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Signup from './signup';

const Rout = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default Rout;
