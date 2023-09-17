import axiosInstance from '../config/axios'

export default async function getUser(data) {
    try {
        await axiosInstance.get('/sanctum/csrf-cookie')
        const response = await axiosInstance.get('/api/user')
        return response
    } catch (error) {
        return error
    }
}
