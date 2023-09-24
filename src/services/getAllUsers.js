import axiosInstance from '../config/axios'

export default async function getAllUsers() {
    try {
        const response = await axiosInstance.get('/api/users/all')
        return response
    } catch (error) {
        return error
    }
}
