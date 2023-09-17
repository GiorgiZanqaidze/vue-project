import axiosInstance from '../config/axios'

export default async function postMessage(data) {
    try {
        const response = await axiosInstance.post('/api/post-messages', data)
        return response
    } catch (error) {
        return error
    }
}
