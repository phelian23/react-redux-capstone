import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllSports from './allSports';
import Sport from './sport';

const HomePage = () => (
  <div>
    <Routes>
      {['/', '/react-redux-capstone'].map((path) => <Route path={path} element={<AllSports />} key="key-1" />)}
      <Route path="/*" element={<Sport />} />
    </Routes>
  </div>
);

export default HomePage;
