import '@testing-library/jest-dom/extend-expect';
import fetchData from '../mock/apimock';

describe('Test API fetch', () => {
  it('Fetch coin name', async () => {
    await fetchData().then((data) => expect(data.data[0].name).toBe('Bitcoin'));
  });
});
