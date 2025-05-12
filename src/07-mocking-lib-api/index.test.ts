// Uncomment the code below and write your tests
import axios from 'axios';

// import { throttledGetDataFromApi } from '.';

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    const baseUrl = 'https://api.example.com';
    const instance = axios.create({ baseURL: baseUrl });

    expect(instance.defaults.baseURL).toBe(baseUrl);
  });

  test('should perform request to correct provided url', async () => {});

  test('should return response data', async () => {});
});
