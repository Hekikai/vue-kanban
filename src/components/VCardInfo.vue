<template>
	<div class="list">
		<draggable
				:list="cards"
				:itemKey="name"
				@change="handleChange"
				v-bind="dragOptions"
				tag="transition-group"
				:component-data="{
					tag: 'ul',
					type: 'transition-group',
					name: !drag ? 'flip-list': null
				}"

				@dragend="$event.preventDefault()"
		>
			<template #item="{element, index}">
				<li :key="element.id" class="list__item">
					<span class="list__item-id">
						id:
						<span class="list__item-text">
							{{ element.id }}
						</span>
					</span>
					<br>
					<span class="list__item-text">
						{{ element.text }}
					</span>
					<v-close class="list__item-button"
									 @click="deleteFunction(element.id, index)"/>
				</li>
			</template>
		</draggable>
	</div>
</template>

<script setup>
import VClose from '@/components/VClose.vue';
import Draggable from 'vuedraggable';
import { computed, ref } from "vue";

const emits = defineEmits(['handleChange']);

const handleChange = (dragEvent) => {
	emits('handleChange', dragEvent);
}

const dragOptions = computed(() => {
	return {
		animation: 250,
		group: 'description',
		disabled: false,
		ghostClass: "ghost"
	}
})

const drag = ref(false);

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

	.flip-list-move {
		transition: transform 0.5s;
	}

	.no-move {
		transition: transform 0s;
	}

	.ghost {
		opacity: 0;
		background: none;
	}

	&__item {
		margin-top: 8px;
		background-color: $li-bg-color;
		padding: 3px 0 3px 5px;
		position: relative;
		cursor: grab;

		&-id {
			color: white;
		}

		&-text {
			color: #4e5053;
		}

		&-button {
			position: absolute;
			top: 10px;
			right: 10px;
		}
	}
}

</style>