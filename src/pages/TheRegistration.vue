<template>
	<div class="container">
		<div class="wrapper">
			<h2 class="header">Registration form</h2>
			<div ref="form" class="container__form">
				<input
						v-model="state.email"
						type="email"
						placeholder="Enter your email"
				>
				<input
						v-model="state.username"
						type="text"
						required
						placeholder="Enter your name"
				>
				<span v-if="v$.username.$error">
					{{ v$.username.$errors[0].$message }}
				</span>

				<input
						v-model="state.password"
						type="password"
						required
						placeholder="Enter your password"
				>
				<span v-if="v$.password.$error">
					{{ v$.password.$errors[0].$message }}
				</span>
				<button
						class="form-button"
						@click="registerUser"
				>
					Register
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed, reactive, ref, inject } from "vue";
import useVuelidate from '@vuelidate/core';
import { required, email, helpers, maxLength, minLength } from '@vuelidate/validators';
import { usernameValidation } from "../utils/usernameValidation";

const router = useRouter();

const form = ref('');
const state = reactive({
	email: 'username@mail.ru',
	username: 'Username1234',
	password: 'username1234'
});
const authService = inject('authService');

const rules = computed(() => {
	return {
		email: {
			email,
			maxLength: maxLength(254)
		},
		username: {
			required,
			usernameValidation: helpers.withMessage(
					`Only letters, numbers and @/./+/-/_. Maximum length: 150 symbols`,
					usernameValidation
			),
			maxLength: maxLength(150),
			minLength: minLength(1)
		},
		password: {
			required,
			maxLength: maxLength(128),
			minLength: minLength(1)
		}
	}
})

const v$ = useVuelidate(rules, state);

const registerUser = () => {
	v$.value.$validate();
	if (!v$.value.$error) {
		const body = {
			username: state.username,
			email: state.email,
			password: state.password
		}
		authService.register(body).then(response => {
			router.push({
				path: '/login'
			})
		}).catch(error => {
			alert(error.message);
		})

	} else {
		alert('Form failed validation, try it again!');
	}

}

</script>

<style scoped lang="scss">
@import 'src/style/variables';

.container {
	height: 100vh;
	position: relative;
	background-color: $main-bg-color;

	.wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #278EA5;
		padding: 30px;
		border-radius: 20px;

		.header {
			text-align: center;
			font-size: 1.5rem;
		}
	}

	&__form {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 3px;
		padding-top: 20px;
		width: 250px;

		.form-button {
			background-color: #1F4287;
			padding: 10px 20px;
			margin-top: 10px;
			border: none;
			color: white;
			cursor: pointer;
		}

		input {
			border: none;
			outline: none;
			border-bottom: 1px solid #ddd;
			font-size: 1em;
			padding: 5px 5px;
			margin: 10px 0 5px 0;
			width: 100%;
		}

		span {
			text-align: center;
			margin: 2px 0 2px 0;
			width: 200px;
		}
	}
}
</style>