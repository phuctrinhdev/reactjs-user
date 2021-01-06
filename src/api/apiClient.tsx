import axios from 'axios';
import queryString from 'query-string';

const apiUrl = process.env.REACT_APP_MOCK_API_URL;
const prefix = process.env.REACT_APP_MOCK_API_PREFIX;
const version = process.env.REACT_APP_MOCK_API_VERSION;
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
  baseURL: `${apiUrl}/${prefix}/${version}/`,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }

  return response;
}, (error) => {
  // Handle errors
  throw error;
});

export default axiosClient;