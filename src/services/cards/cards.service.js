// TODO: error handling in queries

class CardsService {
	PATH = 'https://trello.backend.tests.nekidaem.ru/api/v1/cards/';
	TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MzAsInVzZXJuYW1lIjoiVXNlcm5hbWUxMjM0IiwiZXhwIjoxNjUyODA3NjYxLCJlbWFpbCI6InVzZXJuYW1lQG1haWwucnUiLCJvcmlnX2lhdCI6MTY1MjgwNDA2MX0.7CjuddkKA9_X2P9bW-clqZvZFIoLAGfOlNgEm4x5a-c"

	async getCardsByRowNumber(rowNumber) {
		const res = await fetch(`${ this.PATH }?row=${ rowNumber }`, {
			method: 'GET',
			headers: {
				'Authorization': `JWT ${ this.TOKEN }`
			}
		})
		return await res.json();
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
		const res = await fetch(`${this.PATH}${dto.id}`, {
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