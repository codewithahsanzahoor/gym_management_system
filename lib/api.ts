import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getMembershipPlans = async () => {
    try {
        const response = await api.get('/plans/');
        return response.data;
    } catch (error) {
        console.error('Error fetching plans:', error);
        throw error;
    }
};

export const getDashboardStats = async () => {
    try {
        const response = await api.get('/dashboard-stats/');
        return response.data;
    } catch (error) {
        console.error('Error fetching stats:', error);
        throw error;
    }
};

export default api;
