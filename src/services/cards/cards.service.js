// TODO: error handling in queries

class CardsService {
	PATH = 'https://trello.backend.tests.nekidaem.ru/api/v1/cards/';
	TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5MzAsInVzZXJuYW1lIjoiVXNlcm5hbWUxMjM0IiwiZXhwIjoxNjUyNzcyMzAzLCJlbWFpbCI6InVzZXJuYW1lQG1haWwucnUiLCJvcmlnX2lhdCI6MTY1Mjc2ODcwM30.lfbK5WptDhrP-HfZLf-QWk72clGyyNdUI2Ze1foPDj8'

	async getOnHoldCards() {
		const res = await fetch(`${ this.PATH }?row=0`, {
			method: 'GET',
			headers: {
				'Authorization': `JWT ${ this.TOKEN }`
			}
		})
		return await res.json();
	}

	async addOnHoldCard(dto) {
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
}

export default new CardsService();