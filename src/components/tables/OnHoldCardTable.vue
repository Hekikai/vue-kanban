<template>
	<div :class="$style.table">
		<v-card-header
				:number-of-cards="getMyCards.length"
				header-text="ON HOLD"
				background-color="#ee854b"
		/>
		<main>
			<v-card-info
					@handleChange="handleChangeInToStore($event, '0', updateCard, deleteCard)"
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
import { handleChangeInToStore } from "../../utils/handleChangeInToStore";

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