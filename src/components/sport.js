import React from 'react';
import { Link } from 'react-router-dom';

const Sport = () => (
    <div>
        <p>
        <Link to="/">&larr;</Link>
        </p>
        <h2>Sport Title</h2>
        <ul>
            <li>
            <Link to="/leagues">list of leagues</Link>
            </li>
        </ul>
    </div>
)

export default Sport;