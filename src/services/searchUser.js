import axiosInstance from '../config/axios'

export default async function searchUser(searchQuery) {
    try {
        const response = await axiosInstance.get(`/api/search/users`, { params: { searchTerm: searchQuery } })
        return response
    } catch (error) {
        return error
    }
}
