<template>
<footer ref="footer" class="footer">
	<div class="button">
		<button @click="addNewCard" class="inner">
			Добавить карточку
		</button>
	</div>
</footer>
</template>

<script setup>

import { ref } from "vue";

const footer = ref();
const addNewCard = () => {

}
</script>

<style scoped lang="scss">
@import '../src/style/button.scss';

.footer {

}



</style>