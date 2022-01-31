const getLeagues = async () => {
  try {
    const response = await fetch('https://api.coincap.io/v2/assets', {
      headers: {
        'Accept-Encoding': 'deflate',
      },
    });
    return response.json();
  } catch (error) {
    throw new Error(error.err);
  }
};

export default getLeagues;
