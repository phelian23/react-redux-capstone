const cryptos = () => Promise.resolve({
  data: [
    {
      changePercent24Hr: '0.6174394088866902',
      id: 'bitcoin',
      marketCapUsd: '922698282720.5491983922402426',
      name: 'Bitcoin',
      priceUsd: '48797.4725919232336846',
      rank: '1',
    },
    {
      changePercent24Hr: '-0.4926588088092310',
      id: 'ethereum',
      marketCapUsd: '471020893399.6215129453712436',
      name: 'Ethereum',
      priceUsd: '3962.9129565499682082',
      rank: '2',
    },
  ],
});

const fetchData = () => cryptos().then((data) => data);

export default fetchData;
