import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://o-complex.com:1337/',
});

export const getReviews = async () => {
    try {
        const response = await api.get('/reviews');
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении отзывов:', error);
        throw error;
    }
};

export const getProducts = async (page = 1, pageSize = 20) => {
    try {
        const response = await api.get('/products', {
            params: { page, page_size: pageSize },
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении товаров:', error);
        throw error;
    }
};

export const createOrder = async (phone, cart) => {
    try {
        const response = await api.post('/order', { phone, cart });
        return response.data;
    } catch (error) {
        console.error('Ошибка при создании заказа:', error);
        throw error;
    }
};
