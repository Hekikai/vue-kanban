<template>
	<router-view/>
</template>

<script setup>
import { registeredServices } from "./services/registeredServices";
import { provide } from "vue";

for (const injected of registeredServices) {
	provide(injected.injectKey, injected.service);
}
</script>

<style module lang="scss">

</style>
