import React from 'react';
import { Link } from 'react-router-dom';

const AllSports = () => (
    <div>
        <h2>All Games</h2>
        <div>
            <ul>
                <li>
                    <Link to="/sports">list of games</Link>
                </li>
            </ul>
        </div>
    </div>
)

export default AllSports;