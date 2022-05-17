import { defineStore } from "pinia";
import cardsService from "../services/cards/cards.service";

export const createTableStore = (name, row) => {
	return defineStore(name, {
		state: () => ({
			cards: [],
		}),
		actions: {
			loadCards() {
				cardsService.getCardsByRowNumber(row).then(data => {
					data.forEach(item => {
						if (!this.cards.find((elem) => elem.id === item.id)) {
							this.cards.push(item);
						}
					})
				});
			},
			addCard(dto) {
				cardsService.addCard(dto).then(item => {
					this.cards.push(item);
				})
			},
			deleteCard(id, index) {
				cardsService.deleteCard(id).then(() => {
					this.cards.splice(index, 1)
				})
			},
			updateCard(dto) {
				cardsService.updateCard(dto).then((res) => {
					console.log(res);
				})
			}
		},
		getters: {
			getMyCards() {
				return this.cards;
			}
		}
	})
}