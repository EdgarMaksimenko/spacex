import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Favourites from './pages/Favourites/Favourites';
import Home from './pages/Home/Home';

const App: FC = () => {
  return (
    <div className='body-wrapper'>
      <Header />

      <Routes>
        <Route path='/' >
          <Route index element={<Home />} />
          <Route path='favourite' element={<Favourites />} />
        </Route>
      </Routes>

    </div>
  )
};

export default App;
