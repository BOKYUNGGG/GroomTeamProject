import React, {Suspense, useState, useEffect} from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import './App.css'
import LoginPage from './pages/LoginPage';
import SigninPage from './pages/SigninPage';

import TestPage from './pages/TestPage';
import TestPageTwo from './pages/TestPageTwo';

function App() {

  return (
    <div>
      <Suspense fallback={()=>{return <h1>홈페이지 로딩중</h1>}}>
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/signin' element={<SigninPage />}></Route>
          <Route path='/main' element={<MainPage />}></Route>
          <Route path='/test' element={<TestPage />}></Route>
          <Route path='/test2' element={<TestPageTwo />}></Route>

        </Routes>
      </Suspense>



    </div>
  );
}

export default App;
