import apiClient from './axiosClient';

export const login = async (payload) => {
    return apiClient.post('/login', payload);
};

export const register = async (payload) => {
    return apiClient.post('/register', payload);
};
