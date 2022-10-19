import apiClient from './axiosClient';

export const login = async (payload) => {
    return apiClient.post('/auth/login', payload);
};

export const register = async (payload) => {
    return apiClient.post('/auth/register', payload);
};
