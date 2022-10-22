import React, {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SigninPage from './pages/SigninPage';
import './App.css'


function App() {

  return (
    <div>
      <Suspense fallback={()=>{return <h1>홈페이지 로딩중</h1>}}>
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/signin' element={<SigninPage />}></Route>
          <Route path='/main' element={<MainPage />}></Route>
        </Routes>
      </Suspense>



    </div>
  );
}

export default App;
