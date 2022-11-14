import apiClient from './axiosClient';

export const saveDraft = async (payload) => {
    return apiClient.post('/test/saveDraft', payload);
};
