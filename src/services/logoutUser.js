import axiosInstance from '../config/axios'

export default async function logoutUser() {
    try {
        await axiosInstance.get('/sanctum/csrf-cookie')
        const response = await axiosInstance.post('/api/logout')
        return response
    } catch (error) {
        return error
    }
}
