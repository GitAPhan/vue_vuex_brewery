<template>
    <div>
        <brewery-button></brewery-button>
        <brewery-list></brewery-list>
    </div>
</template>

<script>
import BreweryList from "./BreweryList.vue";
import BreweryButton from "./BreweryButton.vue";
    export default {
        name: 'home-content',
        components: {
            BreweryButton,
            BreweryList,
        },
    }
</script>

<style scoped>

</style>
