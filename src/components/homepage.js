import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllSports from './allSports';
import Sport from './sport';
import Leagues from './leagues';

const HomePage = () => (
    <div>
        <Routes>
            <Route exact path="/" element={<AllSports />} />
            <Route exact path="/sports" element={<Sport />} />
            <Route exact path="/leagues" element={<Leagues />} />
        </Routes>
    </div>
)

export default HomePage;