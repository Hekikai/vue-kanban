import TokenService from "./token.service";
class AuthService {

	PATH = 'https://trello.backend.tests.nekidaem.ru/api/v1/';

	// I get 405 error from POST query. It redirects me to the same url
	// and automatically uses GET query.
	// IDK how to fix it :/
	async register(dto) {
		try {
			const res = await fetch(`${this.PATH}users/create`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				redirect: "follow",
				body: JSON.stringify(dto)
			})
			const data = await res.json();
			const user = {
				username: data.username,
				password: data.password
			}
			TokenService.setUser(user);
			TokenService.updateAccessToken(data.token);

		} catch (e) {
			console.log(e);
			throw new Error(e.message);
		}

	}

	async login(dto) {
		const res =	await fetch(`${this.PATH}users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: "manual",
			body: JSON.stringify(dto)
		})
		const data = await res.json();
		TokenService.updateAccessToken(data.token);
	}
}

export default new AuthService();