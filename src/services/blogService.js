import axios from 'axios';

const API_URL = 'http://localhost:3000/api/blogPosts';

const getBlogs = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getBlogById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    getBlogs,
    getBlogById,
};