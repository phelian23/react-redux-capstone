const getLeagues = async () => {
    try {
      const response = await fetch("https://odds.p.rapidapi.com/v1/sports", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7483d8195emshfe2c15dce789959p16abc5jsn44c1fbeb9ae5",
            "x-rapidapi-host": "odds.p.rapidapi.com"
        }
    });
      return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };

export default getLeagues;