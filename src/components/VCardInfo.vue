<template>
	<ul class="list">
		<li
				class="list__item"
				v-for="card in cards"
		>
			id: {{ card.id }}
			<br>
			{{ card.text }}
		</li>
	</ul>
</template>

<script setup>

const props = defineProps({
	cards: {
		type: Array,
		default: () => [{
			row: '0',
			seq_num: '0',
			text: 'Mock card',
			id: Math.floor(Math.random() + 1)
		}]
	}
})

</script>

<style scoped lang="scss">
@import '../style/variables';

.list {
	padding: 10px;

	&__item {
		margin-top: 8px;
		background-color: $li-bg-color;
		padding: 3px 0 3px 5px;
	}
}

</style>