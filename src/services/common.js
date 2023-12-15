import axios from "@/utils/axiosInstance";

// LOGIN + REGISTER
export const login = async(body) => await axios.post('/api/login', body);
export const register = async(body) => await axios.post('/api/register', body);

// GET USER
export const getUser = async(body) => await axios.get('/api/my-info').then(({data}) => data || null);
// UPDATE_USER 
export const updateUser = async(body) => await axios.post('/api/update-user', body);
// GET LIST USER
export const getListUser = async(body) => await axios.get('/api/users').then(({data}) => data || null);

export const getDataTest = (body) => axios.post('/api/test-route', body).then(({data}) => data || null);