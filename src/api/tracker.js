import axios from 'axios'
import * as SecureStore from 'expo-secure-store';

const {API_URL} = process.env

const trackerApi = axios.create({
	baseURL: API_URL
})
trackerApi.interceptors.request.use(
	async (config) => {
		const token = await SecureStore.getItemAsync('token')
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	(err) => {
		return Promise.reject(err)
	})
export default trackerApi