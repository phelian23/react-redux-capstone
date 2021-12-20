import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLeagues } from '../redux/sports/sports';

const AllSports = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLeagues());
    }, [dispatch]);

    const leagues = useSelector((state) => state.sportReducer);
    
    return (
        <div>
        <h2>All Games</h2>
        <div>
            <ul>
                {leagues.map((league) => (
                    <li key={league.key}>{league.group}</li>
                ))}
                <li>
                    <Link to="/sports">list of games</Link>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default AllSports;