import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdArrowBackIos } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { AiFillAudio } from 'react-icons/ai';
import styles from '../styles/sport.module.css';

const Sport = () => {
  const leagues = useSelector((state) => state.sportReducer);
  const selLeague = leagues.filter((league) => league.display === true)[0];
  const coinList = selLeague.coinArr;

  /* eslint-disable no-nested-ternary */
  const approx = (value) => (value >= 1.0e+12
    ? `$ ${(value / 1.0e+12).toFixed(2)}T`
    : value >= 1.0e+9
      ? `$ ${(value / 1.0e+9).toFixed(2)}B`
      : value >= 1.0e+6
        ? `$ ${(value / 1.0e+6).toFixed(2)}M`
        : value >= 1.0e+3
          ? `$ ${(value / 1.0e+3).toFixed(2)}K`
          : `$ ${value}`
  );

  const othApprox = (value) => Number(value).toFixed(4);

  const positive = {
    color: 'green',
  };

  const negative = {
    color: 'red',
  };

  return (
    <div>
      <header className={styles.header}>
        <Link className={styles.link} to="/">
          <MdArrowBackIos />
          <span>2021</span>
        </Link>
        <p>coin details</p>
        <div>
          <AiFillAudio />
          <FiSettings />
        </div>
      </header>
      <h2 className={styles.main}>{selLeague.name}</h2>
      <ul className={styles.list}>
        {coinList.map((coin) => (
          <li key={coin.id}>
            <div className={styles.listItems}>
              <h3>{coin.name}</h3>
              <div>
                <p>
                  <span>Price: </span>
                  <span>{othApprox(coin.priceUsd)}</span>
                </p>
                <p>
                  <span>Market Cap: </span>
                  <span>{approx(coin.marketCapUsd)}</span>
                </p>
                <p>
                  <span>24Hr Change: </span>
                  <span style={coin.changePercent24Hr > 0
                    ? positive
                    : coin.changePercent24Hr < 0
                      ? negative
                      : null}
                  >
                    {othApprox(coin.changePercent24Hr)}
                  </span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sport;
