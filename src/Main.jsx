import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cyber from './pages/Cyber';
import Dreams from './pages/Dreams';
import Glitch from './pages/Glitch';
import Misc from './pages/Misc';

/* Switch between components based on URL */
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/gallery' element={<Home/>} />
        <Route path='/gallery/cyber' element={<Cyber/>} />
        <Route path='/gallery/dreams' element={<Dreams/>} />
        <Route path='/gallery/glitch' element={<Glitch/>} />
        <Route path='/gallery/misc' element={<Misc/>} />
      </Routes>
    </main>
  );
}
export default Main;
