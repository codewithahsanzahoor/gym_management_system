import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor: Har request se pehle token check karo
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Login Function
export const login = async (credentials: any) => {
    try {
        const response = await api.post('/accounts/login/', credentials);
        if (response.data.access) {
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
        }
        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};

// Logout Function
export const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/admin/login';
};

export const getMembershipPlans = async () => {
    const response = await api.get('/plans/');
    return response.data;
};

export const getDashboardStats = async () => {
    const response = await api.get('/dashboard-stats/');
    return response.data;
};

export const getMembers = async () => {
    const response = await api.get('/accounts/members/');
    return response.data;
};

export const createMember = async (memberData: any) => {
    const response = await api.post('/accounts/members/', memberData);
    return response.data;
};

export const getAttendance = async () => {
    try {
        const response = await api.get('/attendance/');
        return response.data;
    } catch (error) {
        console.error('Error fetching attendance:', error);
        throw error;
    }
};

export const markAttendance = async (attendanceData: { user: number; status?: string }) => {
    try {
        const response = await api.post('/attendance/', attendanceData);
        return response.data;
    } catch (error) {
        console.error('Error marking attendance:', error);
        throw error;
    }
};

export default api;
