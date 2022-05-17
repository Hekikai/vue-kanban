import TokenService from "./token.service";
import axiosInstance from "../api";
class AuthService {

	PATH = 'https://trello.backend.tests.nekidaem.ru/api/v1/';

	// async register(dto) {
	// 	const res = await
	// 	return fetch(`${ this.PATH }/create`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(dto)
	// 	}).then(response => response.json())
	// 		.then(data => {
	// 			const user = {
	// 				username: data.username,
	// 				password: data.password
	// 			}
	// 			TokenService.updateAccessToken(data.token);
	// 			TokenService.setUser(user);
	// 			return data;
	// 		})
	// 		.catch(error => {
	// 			return Promise.reject(error.message);
	// 		})
	// }

	async login(dto) {

		// return axiosInstance.post('users/login', dto)

		const res =	await fetch(`${this.PATH}users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dto)
		})
		const data = await res.json();
		console.log(data);


		// return fetch(`${ this.PATH }/login`, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		body: JSON.stringify(dto)
		// 	}
		// }).then(response => response.json())
		// 	.then(data => {
		// 		const user = {
		// 			username: data.username,
		// 			password: data.password
		// 		}
		// 		TokenService.updateAccessToken(data.token);
		// 		TokenService.setUser(user);
		// 		return data;
		// 	})
	}
}

export default new AuthService();