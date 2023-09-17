import axiosInstance from '../config/axios'

export default async function registerUser(data) {
    try {
        const response = await axiosInstance.post('/api/register', data)
        return response
    } catch (error) {
        return error
    }
}
