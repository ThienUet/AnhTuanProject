import axios from "@/utils/axiosInstance";

// LOGIN + REGISTER
export const login = async(body) => await axios.post('/api/login', body);
export const register = async(body) => await axios.post('/api/register', body);

// GET USER
export const getUser = async(body) => await axios.get('/api/my-info').then(({data}) => data || null);