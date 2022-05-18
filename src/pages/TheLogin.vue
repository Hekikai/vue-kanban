<template>
	<div class="container">
		<div class="wrapper">
			<h2 class="header">Login form</h2>
			<div ref="form" class="container__form">
				<input
						v-model="state.username"
						type="text"
						required
						placeholder="Enter your name"
				>
				<input
						v-model="state.password"
						type="password"
						required
						placeholder="Enter your password"
				>
				<div class="buttons">
					<button
							class="form-button"
							@click="handleLogin"
					>
						Login
					</button>
					<button
							class="form-button"
							@click="router.push({path: '/registration'})"
					>
						Are you new?
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import {  reactive, inject } from "vue";

const router = useRouter();
const authService = inject('authService');

const state = reactive({
	username: 'Username1234',
	password: 'username1234'
});

const handleLogin = () => {
		authService.login(state)
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

		.buttons {
			display: flex;
			gap: 35px;
			margin-top: 10px;
		}

		.form-button {
			background-color: #1F4287;
			padding: 10px 20px;
			//margin-top: 10px;
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