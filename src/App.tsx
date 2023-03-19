import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Favourites from './pages/Favourites/Favourites';
import Home from './pages/Home/Home';

const App: FC = () => {
  return (
    <div className='body-wrapper'>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' >
            <Route index element={<Home/>} />
            <Route path='favourites' element={<Favourites/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  )
};

export default App;
