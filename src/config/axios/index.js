import axios from 'axios'
axios.defaults.withCredentials = true

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest'
    }
})

export default axiosInstance
