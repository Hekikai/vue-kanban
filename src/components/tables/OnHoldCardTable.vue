<template>
	<div :class="$style.table">
		<v-card-header
				:number-of-cards="getMyCards.length"
				header-text="On hold"
				background-color="orange"
		/>
		<main>
			<v-card-info
					@handleChange="handleChangeInToStore"
					:cards="getMyCards"
					:deleteFunction="deleteCard"
					name="'onHold'"
			/>
		</main>
		<v-card-footer :row="0" :addCard="addCard"/>
	</div>
</template>

<script setup>
import VCardHeader from '../VCardHeader.vue';
import VCardFooter from '../VCardFooter.vue';
import VCardInfo from '../VCardInfo.vue';
import { onMounted } from "vue";
import { createTableStore } from "../../stores/createTableStore";

const handleChangeInToStore = (dragEvent) => {
	// const {element} = dragEvent.added || dragEvent.removed;
	// updateCard(element);
	if(dragEvent.moved) {
		updateCard(dragEvent.moved.element)
	}
}

const useTableStore = createTableStore('onHoldStore', 0);
const store = useTableStore();
const {loadCards, addCard, deleteCard, getMyCards, updateCard} = store;

onMounted(() => loadCards());
</script>

<style module lang="scss">
@import '../../style/variables';

.table {
	width: $table-size;
	background-color: $card-bg-color;
}

</style>