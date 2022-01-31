import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllSports from './allSports';
import Sport from './sport';

const HomePage = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<AllSports />} />
      <Route path="/details/:name" element={<Sport />} />
    </Routes>
  </div>
);

export default HomePage;
