class TokenService {
	USER = 'user';

	ACCESS_TOKEN = 'access_token';
	REFRESH_TOKEN = 'refresh_token';

	getAccessToken() {
		return localStorage.getItem(this.ACCESS_TOKEN);
	}

	getRefreshToken() {
		return localStorage.getItem(this.REFRESH_TOKEN);
	}

	updateAccessToken(token) {
		localStorage.setItem(this.ACCESS_TOKEN, token);
	}

	updateRefreshToken(token) {
		localStorage.setItem(this.REFRESH_TOKEN, token);
	}

	getUSer() {
		return JSON.parse(localStorage.getItem(this.USER));
	}

	setUser(user) {
		localStorage.setItem(this.USER, JSON.stringify(user));
	}

	removeUser() {
		localStorage.removeItem(this.USER);
	}
}

export default new TokenService();