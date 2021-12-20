import getLeagues from "../../components/api/api";

const FETCH_SPORTS = 'sports/leagues/FETCH_SPORTS';

const initialState = [];

const extractLeagues = (data) => {
  const leagues = data.data
  return leagues;
};

export const fetchLeagues = () => async (dispatch) => {
  try {
    const data = await getLeagues();

    dispatch({ type: FETCH_SPORTS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

const sportReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPORTS:
      return extractLeagues(action.payload);

    default:
      return state;
  }
};

export default sportReducer;
