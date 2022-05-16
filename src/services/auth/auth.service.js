import TokenService from "./token.service";

class AuthService {

	PATH = 'https://trello.backend.tests.nekidaem.ru/api/v1/users';

	register(dto) {
		return fetch(`${ this.PATH }/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dto)
		}).then(response => response.json())
			.then(data => {
				const user = {
					username: data.username,
					password: data.password
				}
				TokenService.updateAccessToken(data.token);
				TokenService.setUser(user);
				return data;
			})
			.catch(error => {
				return Promise.reject(error.message);
			})
	}

	login(dto) {
		return fetch(`${this.PATH}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				body: JSON.stringify(dto)
			}
		}).then(response => response.json())
			.then(data => {
				const user = {
					username: data.username,
					password: data.password
				}
				TokenService.updateAccessToken(data.token);
				TokenService.setUser(user);
				return data;
			})
	}
}

export default new AuthService();