import axios from 'axios';
import { getLocalStorage } from 'utils/localStorage';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor
axiosClient.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        config.headers.authorization = `Bearer ${getLocalStorage('access-token')}`;
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default axiosClient;
