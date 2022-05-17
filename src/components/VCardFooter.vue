<template>
	<footer ref="footer" class="footer">
		<div v-if="isUserAddingCard" class="footer__form">
			<textarea v-model="cardText" class="description"/>
			<div class="footer__form__btns">
				<button
						class="button-add"
						@click="addNewCard"
				>
					Добавить карточку
				</button>
				<button @click="isUserAddingCard = false" class="button-close">
					<img :src="Cross" alt="Cross image" class="button-close-img">
				</button>
			</div>
		</div>
		<div v-else class="button">
			<button @click="isUserAddingCard = true" class="inner">
				Добавить карточку
			</button>
		</div>
	</footer>
</template>

<script setup>
import Cross from '@/assets/close.png';
import { ref } from "vue";

const props = defineProps({
	addCard: {
		type: Function
	}
})

const isUserAddingCard = ref(false);
const cardText = ref('');

const addNewCard = () => {
	if (cardText.value === '') {
		alert('Your card must have at least 1 symbol to be added!');
		isUserAddingCard.value = false;
		return;
	}

	const cardToAdd = {
		row: '0',
		text: cardText.value
	}
	props.addCard(cardToAdd);
	isUserAddingCard.value = false;
	cardText.value = '';
}
</script>

<style scoped lang="scss">
@import '../src/style/button.scss';

.footer {

	&__form {
		padding: 10px;

		&__btns {
			margin-top: 10px;
		}

		.button-add {
			border: none;
			background-color: #6F4E37;
			cursor: pointer;
			color: white;
			padding: 5px 20px;
		}

		.button-close {
			border: none;
			background-color: transparent;
			cursor: pointer;
			margin-left: 10px;
			vertical-align: center;

			&-img {
			}
		}

		.description {
			width: 100%;
			height: 75px;
		}
	}
}


</style>