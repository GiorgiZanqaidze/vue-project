import axiosInstance from '../config/axios'

export default async function loginUser(data) {
    try {
        await axiosInstance.get('/sanctum/csrf-cookie')
        const response = await axiosInstance.post('/api/login', data)
        return response
    } catch (error) {
        return error
    }
}
