<template>
	<header class="header">
		{{ headerText }} ({{ numberOfCards }})
	</header>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
	headerText: {
		type: String,
		default: () => 'Header text',
		required: true
	},
	numberOfCards: {
		type: Number,
		required: true,
		default: () => 0
	},
	backgroundColor: {
		type: String,
		required: true,
		default: () => 'red'
	}
})
</script>

<style scoped lang="scss">

.header {
	padding: 8px;
	font-size: 1.5rem;
	text-transform: uppercase;
	text-align: left;
	color: white;
	background-color: v-bind(backgroundColor);
}
</style>