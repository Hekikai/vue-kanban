import { defineStore } from 'pinia';
import cardsService from "../services/cards/cards.service";

export const useOnHoldStore = defineStore('onHoldStore', {
	state: () => ({
		cards: [],
	}),
	actions: {
		loadCards() {
			cardsService.getOnHoldCards().then(data => {
				data.forEach(item => this.cards.push(item))
			});
		},
		addOnHoldCard(dto) {
			cardsService.addOnHoldCard(dto).then(item => {
				this.cards.push(item);
			})
		}
	}
})