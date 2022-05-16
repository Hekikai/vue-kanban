<template>
	<div class="info">
		<p>
			id: {{ id }}
		</p>
		<p>
			my text)))
		</p>
	</div>
	<div class="info">
		<p>
			id: {{ id }}
		</p>
		<p>
			my text)))
		</p>
	</div>
	<div class="info">
		<p>
			id: {{ id }}
		</p>
		<p>
			my text)))
		</p>
	</div>
</template>

<script setup>

import { ref } from "vue";

const id = ref(19487201);

</script>

<style scoped lang="scss">

.info {
	padding: 5px;
	background-color: black;
	color: white;
	margin-bottom: 10px;
}

</style>