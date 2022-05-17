import TokenService from "./auth/token.service";
import AuthService from "./auth/auth.service";
import CardsService from "./cards/cards.service";

export const registeredServices = [
	{
		injectKey: 'tokenService',
		service: TokenService
	},
	{
		injectKey: 'authService',
		service: AuthService
	},
	{
		injectKey: 'cardsService',
		service: CardsService
	}
]