// TODO: error handling in queries
import tokenService from "../auth/token.service";
import router from "../../router";

class CardsService {
	PATH = 'https://trello.backend.tests.nekidaem.ru/api/v1/cards/';
	TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MzAsInVzZXJuYW1lIjoiVXNlcm5hbWUxMjM0IiwiZXhwIjoxNjUyODg1MTgyLCJlbWFpbCI6InVzZXJuYW1lQG1haWwucnUiLCJvcmlnX2lhdCI6MTY1Mjg4MTU4Mn0.2iv0Ix_hDdRPew1F6n1mBSrHxz2tEF_huhQovnPnLfY"

	// TOKEN = tokenService.getAccessToken();

	// TODO: error handling
	// Why it doesn't work? :DDDDD
	async getCardsByRowNumber(rowNumber) {
		try {
			const res = await fetch(`${ this.PATH }?row=${ rowNumber }`, {
				method: 'GET',
				headers: {
					'Authorization': `JWT ${ this.TOKEN }`
				}
			})
			return await res.json();
		} catch (e) {
			console.log(e);
			if (e.status === 401) {
				router.push('/login');
			}
		}
	}

	async addCard(dto) {
		const res = await fetch(`${ this.PATH }`, {
				method: 'POST',
				headers: {
					'Authorization': `JWT ${ this.TOKEN }`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(dto)
			}
		)
		return await res.json();
	}

	async deleteCard(id) {
		const res = await fetch(`${ this.PATH }${ id }/`, {
			method: 'DELETE',
			headers: {
				'Authorization': `JWT ${ this.TOKEN }`,
				'Content-Type': 'application/json'
			},
		})
	}

	async updateCard(dto) {
		const res = await fetch(`${ this.PATH }${ dto.id }`, {
			method: 'PATCH',
			headers: {
				'Authorization': `JWT ${ this.TOKEN }`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dto)
		})
	}
}

export default new CardsService();