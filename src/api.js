import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchDevices = async () => {
    try {
        const response = await axios.get(`${API_URL}/devices`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении устройств:', error);
        throw error;
    }
};

export const addDevice = async (device) => {
    try {
        const response = await axios.post(`${API_URL}/devices`, device);
        return response.data;
    } catch (error) {
        console.error('Ошибка при добавлении устройства:', error);
        throw error;
    }
};

export const addMeasurement = async (measurement) => {
    try {
        const response = await axios.post(`${API_URL}/measurements`, measurement);
        return response.data;
    } catch (error) {
        console.error('Ошибка при добавлении измерения:', error);
        throw error;
    }
};

export const fetchMeasurements = async (deviceId) => {
    try {
        const response = await axios.get(`${API_URL}/measurements/${deviceId}`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении измерений:', error);
        throw error;
    }
};
