import TokenService from "./auth/token.service";
import AuthService from "./auth/auth.service";

export const registeredServices = [
	{
		injectKey: 'tokenService',
		service: TokenService
	},
	{
		injectKey: 'authService',
		service: AuthService
	}
]