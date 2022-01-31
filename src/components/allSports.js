import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { AiFillAudio } from 'react-icons/ai';
import { MdArrowBackIos } from 'react-icons/md';
import { fetchLeagues, displayLeague } from '../redux/sports/sports';

import styles from '../styles/allSports.module.css';

const AllSports = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeagues());
  }, [dispatch]);

  const getCoins = useSelector((state) => state.sportReducer);
  const allCoin = getCoins[0];
  const categories = getCoins;
  const sumCap = (data) => {
    let marCapSum = 0;
    data.map((obj) => {
      marCapSum += Number(obj.marketCapUsd);
      return marCapSum;
    });
    /* eslint-disable no-nested-ternary */
    return (marCapSum >= 1.0e+12
      ? `$ ${(marCapSum / 1.0e+12).toFixed(2)}T`
      : marCapSum >= 1.0e+9
        ? `$ ${(marCapSum / 1.0e+9).toFixed(2)}B`
        : marCapSum >= 1.0e+6
          ? `$ ${(marCapSum / 1.0e+6).toFixed(2)}M`
          : marCapSum >= 1.0e+3
            ? `$ ${(marCapSum / 1.0e+3).toFixed(2)}K`
            : `$ ${marCapSum}`
    );
  };

  return (
    <div>
      <header className={styles.header}>
        <div>
          <MdArrowBackIos />
          <span>2021</span>
        </div>
        <p>Cryptocurrencies</p>
        <div className={styles.iconHolder}>
          <AiFillAudio />
          <FiSettings className={styles.icons} />
        </div>
      </header>
      <Link className={styles.link} to="/details/allcoins" onClick={() => dispatch(displayLeague(allCoin.name))}>
        <div className={styles.main}>
          <h2>Pick a Category</h2>
          <span>The fastest way to check trends</span>
        </div>
      </Link>
      <p className={styles.categories}>Categories</p>
      <div className={styles.subMain}>
        <ul className={styles.list}>
          {categories.map((coin) => (
            <Link key={coin.name} className={styles.link} to={`/details/${coin.name}`} onClick={() => dispatch(displayLeague(coin.name))}>
              <li className={styles.listItem}>
                <h3 className={styles.listName}>{coin.name}</h3>
                <p>{sumCap(coin.coinArr)}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllSports;
