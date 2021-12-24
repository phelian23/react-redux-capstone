import getLeagues from '../../components/api/api';

const FETCH_SPORTS = 'sports/leagues/FETCH_SPORTS';
const DISPLAY_LEAGUE = 'sports/leagues/DISPLAY_LEAGUE';

const initialState = [];

const extractLeagues = (data) => {
  const leagues = data.data;

  const allCoins = [];

  const topGainers = {
    name: 'Top Gainers',
    coinArr: [],
    display: false,
  };

  const allCoinsArr = {
    name: 'All Coins',
    coinArr: [],
    display: false,
  };

  const topLosers = {
    name: 'Top 10 Losers',
    coinArr: [],
    display: false,
  };

  const topRated = {
    name: 'Top 20 Rated',
    coinArr: [],
    display: false,
  };

  const leastRated = {
    name: 'Least Rated',
    coinArr: [],
    display: false,
  };

  const testCoins = leagues.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr);
  topGainers.coinArr = testCoins.slice(0, 10);
  topLosers.coinArr = testCoins.slice(testCoins.length - 10, testCoins.length);
  allCoinsArr.coinArr = leagues.sort((a, b) => a.rank - b.rank);
  topRated.coinArr = leagues.slice(0, 20);
  leastRated.coinArr = leagues.slice(leagues.length - 20, leagues.length);

  allCoins[allCoins.length] = allCoinsArr;
  allCoins[allCoins.length] = topGainers;
  allCoins[allCoins.length] = topLosers;
  allCoins[allCoins.length] = topRated;
  allCoins[allCoins.length] = leastRated;
  return allCoins;
};

export const fetchLeagues = () => async (dispatch) => {
  try {
    const data = await getLeagues();

    dispatch({ type: FETCH_SPORTS, payload: data });
  } catch (error) {
    throw new Error(error.err);
  }
};

export const displayLeague = (id) => ({ type: DISPLAY_LEAGUE, payload: id });

const sportReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPORTS:
      return extractLeagues(action.payload);

    case DISPLAY_LEAGUE:
      return state.map((coin) => {
        if (coin.name === action.payload) {
          return {
            ...coin,
            display: !coin.display,
          };
        } return coin;
      });

    default:
      return state;
  }
};

export default sportReducer;
