import axios from "@/utils/axiosInstance";

export const adminCreateUser = async(body) => await axios.post('/api/admin/create-user', body);