import axiosInstance from '../config/axios'

export default async function getChatUser(userId) {
    try {
        const response = await axiosInstance.get(`/api/users/${userId}`)
        return response
    } catch (error) {
        return error
    }
}
