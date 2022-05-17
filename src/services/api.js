/*TODO: axios doesn't want to work.
* It redirects me after POST with 405
 */
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: 'https://trello.backend.tests.nekidaem.ru/api/v1/',
	headers: {
		accept: 'application/json'
	}
})

export default axiosInstance;