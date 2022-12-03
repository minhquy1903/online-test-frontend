import apiClient from './axiosClient';

export const createQuestion = async (payload) => {
    return apiClient.post('/question/create', payload);
};
