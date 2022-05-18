<template>
	<footer ref="footer" class="footer">
		<div v-if="isUserAddingCard" class="footer__form">
			<textarea
					ref="textarea"
					@keyup.enter="addNewCard"
					v-model="cardText"
					class="description"
					placeholder="Ввести заголовок для этой карточки"/>
			<div class="footer__form__btns">
				<button
						class="button-add"
						@click="addNewCard"
				>
					Добавить карточку
				</button>
				<v-close :onClickFunction="switchAddCardForm"/>
			</div>
		</div>
		<div
				v-else
				@click="switchAddCardForm"
				class="button">
			<button class="inner">
				Добавить карточку
			</button>
		</div>
	</footer>
</template>

<script setup>
import VClose from '@/components/VClose.vue';
import { ref } from "vue";

const props = defineProps({
	addCard: {
		type: Function
	},
	row: {
		type: Number,
		required: true
	}
})

const isUserAddingCard = ref(false);
const cardText = ref('');
const textarea = ref();

const switchAddCardForm = () => {
	isUserAddingCard.value = !isUserAddingCard.value;
}

const addNewCard = () => {
	if (cardText.value === '') {
		alert('Your card must have at least 1 symbol to be added!');
		textarea.value.focus();
		return;
	}

	const cardToAdd = {
		row: props.row,
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
			background-color: #5f6161;
			cursor: pointer;
			color: white;
			padding: 5px 20px;
		}

		.description {
			width: 100%;
			height: 75px;
			background-color: #4f4f4f;
			border: none;
			color: white
		}
	}
}


</style>