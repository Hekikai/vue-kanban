<template>
	<div class="list">
		<draggable
				:list="cards"
				:itemKey="name"
				group="cardTable"
				@change="handleChange"
		>
			<template #item="{element, index}">
				<div class="list__item">
					<span class="list__item-id">
						id: {{ element.id }}
					</span>
					<br>
					<span>
						{{ element.text }}
					</span>
					<v-close class="list__item-button"
									 @click="deleteFunction(element.id, index)"/>
				</div>
			</template>
		</draggable>
	</div>
</template>

<script setup>
import VClose from '@/components/VClose.vue';
import Draggable from 'vuedraggable';

const emits = defineEmits(['handleChange'])


const handleChange = (dragEvent) => {
	emits('handleChange', dragEvent);
}


const props = defineProps({
	cards: {
		type: Array,
		default: () => [
			{
				row: '0',
				seq_num: '0',
				text: 'Mock card',
				id: Math.floor(Math.random() + 1)
			},
			{
				row: '0',
				seq_num: '1',
				text: 'Mock card 2',
				id: Math.floor(Math.random() + 1)
			},
			{
				row: '0',
				seq_num: '3',
				text: 'Mock card 3',
				id: Math.floor(Math.random() + 1)
			},
		]
	},
	deleteFunction: {
		type: Function
	},
	name: {
		type: String
	}
})

</script>

<style scoped lang="scss">
@import '../style/variables';

.list {
	padding: 10px;
	min-height: 20px;

	&__item {
		margin-top: 8px;
		background-color: $li-bg-color;
		padding: 3px 0 3px 5px;
		position: relative;

		&-id {
			color: white;
		}

		&-text {
			color: #6F4E37;
		}

		&-button {
			position: absolute;
			top: 10px;
			right: 10px;
		}
	}
}

</style>