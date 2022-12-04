import apiClient from './axiosClient';

export const createQuestion = async (payload) => {
    return apiClient.post('/question/create', payload);
};

export const getQuestions = async (payload) => {
    return apiClient.get('/question', payload);
};
