import React from 'react';
import { Link } from 'react-router-dom';

const Leagues = () => (
    <div>
        <p>
        <Link to="/sports">&larr;</Link>
        </p>
        <h2>League Title</h2>
        <ul>
            <li>list of games with odds</li>
        </ul>
    </div>
)

export default Leagues;